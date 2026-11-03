import { DouScraper } from "../scrapers/dou.scraper";
import { DjinniScraper } from "../scrapers/djinni.scraper";
import { WorkUaScraper } from "../scrapers/work-ua.scraper";
import { RobotaUaScraper } from "../scrapers/robota-ua.scraper";
import { JobicoScraper } from "../scrapers/jobico.scraper";
import { VacancyService } from "../services/vacancy.service";
import { TelegramNotifierService } from "../bot/notifier.service";
import { prisma } from "../db";
import { isBlacklistedTitle, isTechRole } from "../services/seniority-filter";
import { matchesLocation } from "../services/location-filter";
import type { Bot } from "grammy";

export { matchesLocation };

const SCRAPE_LIMIT = 20;
const MAX_KEYWORDS_PER_CYCLE = 5;

export class PipelineOrchestrator {
  private isRunning = false;
  private douScraper = new DouScraper();
  private djinniScraper = new DjinniScraper();
  private workUaScraper = new WorkUaScraper();
  private robotaUaScraper = new RobotaUaScraper();
  private jobicoScraper = new JobicoScraper();
  private vacancyService = new VacancyService();
  private notifier = new TelegramNotifierService();

  /**
   * Запускає повний автономний цикл із захистом від паралельного запуску (Mutex Lock)
   */
  async runFullCycle(options: {
    bot?: Bot | undefined;
    triggeredBy?: string | undefined;
    minScore?: number | undefined;
  } = {}) {
    if (this.isRunning) {
      console.warn("⚠️ [Pipeline] Попередній запуск ще виконується! Пропускаємо виклик (Mutex Lock).");
      return { skipped: true, reason: "Already running" };
    }

    this.isRunning = true;
    const startTime = Date.now();
    console.log(`\n🚀 [Pipeline] Старт автономного циклу о ${new Date().toLocaleTimeString()} (Trigger: ${options.triggeredBy || "CRON"})...`);

    try {
      // 1. Отримуємо унікальні ключові слова з профілів усіх користувачів
      const profiles = await prisma.searchProfile.findMany({
        include: { user: true },
      });

      if (profiles.length === 0) {
        console.log("ℹ️ [Pipeline] Немає зареєстрованих профілів пошуку.");
        return { totalScraped: 0, newMatches: 0 };
      }

      // Збираємо список ключових слів (дедуплікація)
      const allKeywords = Array.from(
        new Set(profiles.flatMap((p) => p.keywords))
      );

      // Основний профіль налаштувань для формування точних URL-запитів.
      const mainProfile = await prisma.searchProfile.findFirst();
      const seniority = mainProfile?.level;
      const location = mainProfile?.location;

      // Ітеруємо по всіх ключових словах (дедуплікація, ліміт MAX_KEYWORDS_PER_CYCLE)
      const queryKeywords = allKeywords.length > 0 ? allKeywords.slice(0, MAX_KEYWORDS_PER_CYCLE) : ["Frontend"];

      console.log(`🔍 [Pipeline] Збираємо вакансії для запитів: ${queryKeywords.map((k) => `"${k}"`).join(", ")} (рівень: ${seniority || "Junior"}, локація: ${location || "Remote"}, limit: ${SCRAPE_LIMIT}) з 5 джерел...`);

      const scrapedMap = new Map<string, Awaited<ReturnType<DouScraper["scrape"]>>[number]>();
      const failures: Array<{ name: string; reason: unknown }> = [];
      for (const queryKeyword of queryKeywords) {
        const scrapeOpts = { keyword: queryKeyword, seniority, location, limit: SCRAPE_LIMIT };
        const scrapers = [
          { name: "DOU", run: () => this.douScraper.scrape(scrapeOpts) },
          { name: "Djinni", run: () => this.djinniScraper.scrape(scrapeOpts) },
          { name: "Work.ua", run: () => this.workUaScraper.scrape(scrapeOpts) },
          { name: "Robota.ua", run: () => this.robotaUaScraper.scrape(scrapeOpts) },
          { name: "Jobico", run: () => this.jobicoScraper.scrape(scrapeOpts) },
        ];
        const results = await Promise.allSettled(scrapers.map((s) => s.run()));
        results.forEach((r, i) => {
          if (r.status === "fulfilled") {
            for (const v of r.value) scrapedMap.set(`${v.source}:${v.externalId}`, v);
          } else {
            failures.push({ name: `${scrapers[i]!.name} ("${queryKeyword}")`, reason: r.reason });
          }
        });
      }
      const scrapedVacancies = Array.from(scrapedMap.values());

      for (const f of failures) {
        console.error(`❌ [Pipeline] Помилка парсера ${f.name}:`, f.reason);
      }
      console.log(`📦 [Pipeline] Успішно спарсено: ${scrapedVacancies.length} вакансій.`);

      // 2.5. Жорстка фільтрація за локацією кандидата ЩЕ ДО збереження в базу
      const allLocations = Array.from(
        new Set(profiles.map((p) => p.location))
      ).filter(Boolean);
      const combinedLocationStr = allLocations.join(" / ") || "Remote";

      const filteredVacancies = scrapedVacancies.filter((v) =>
        matchesLocation(v, combinedLocationStr)
      );

      const rejectedCount = scrapedVacancies.length - filteredVacancies.length;
      console.log(
        `📍 [Pipeline] Фільтрація локації ("${combinedLocationStr}"): залишено ${filteredVacancies.length} із ${scrapedVacancies.length} (відсіяно ${rejectedCount} офлайн-вакансій в інших містах).`
      );

      // 2.6. Жорсткий фільтр: вакансія зберігається лише якщо не в blacklist і належить до технічних IT-ролей
      const validVacancies: typeof filteredVacancies = [];
      for (const vacancy of filteredVacancies) {
        const isValidTitle = !isBlacklistedTitle(vacancy.title) && isTechRole(vacancy.title);
        if (!isValidTitle) {
          console.log(`[FILTERED OUT] Тайтл не пройшов: ${vacancy.title}`);
          continue;
        }
        validVacancies.push(vacancy);
      }
      const rejectedTitlesCount = filteredVacancies.length - validVacancies.length;
      console.log(
        `🎓 [Pipeline] Фільтр тайтлів (!isBlacklistedTitle && isTechRole): залишено ${validVacancies.length} із ${filteredVacancies.length} (відсіяно ${rejectedTitlesCount} нерелевантних/нетехнічних).`
      );

      // 3. Зберігаємо у PostgreSQL ТІЛЬКИ відфільтровані за локацією та роллю вакансії
      await this.vacancyService.saveVacancies(validVacancies);

      // 4. Створюємо записи Match зі статусом NEW, потім оцінюємо нові через AI
      let newMatchesCreated = 0;
      const newlyCreated: Array<{ profile: (typeof profiles)[number]; vacancy: (typeof allVacancies)[number] }> = [];
      const allVacancies = await prisma.vacancy.findMany({
        orderBy: { postedAt: "desc" },
        take: 50,
      });

      for (const profile of profiles) {
        for (const vacancy of allVacancies) {
          // Жорстка фільтрація: переконуємося, що вакансія суворо відповідає локації саме цього кандидата
          if (!matchesLocation(vacancy, profile.location)) {
            continue;
          }
          // Не створюємо Match для нетехнічних або вакансій з blacklist (навіть якщо вони вже були в базі)
          if (isBlacklistedTitle(vacancy.title) || !isTechRole(vacancy.title)) {
            continue;
          }

          const existingMatch = await prisma.match.findUnique({
            where: {
              userId_vacancyId: {
                userId: profile.userId,
                vacancyId: vacancy.id,
              },
            },
          });

          // Якщо запису ще немає — створюємо новий зі статусом NEW та reason: null
          if (!existingMatch) {
            await prisma.match.create({
              data: {
                userId: profile.userId,
                vacancyId: vacancy.id,
                status: "NEW",
                score: 0,
                reason: null, // Очікує натискання [🤖 Запитати думку ШІ]
                matchedSkills: [],
                missingSkills: [],
              },
            });
            newMatchesCreated++;
            newlyCreated.push({ profile, vacancy });
          }
        }
      }

      console.log(`✨ [Pipeline] Створено ${newMatchesCreated} нових матчів.`);

      // 5. Сповіщення в Telegram про нові вакансії
      const notificationResult = options.bot
        ? await this.notifier.notifyNewMatches(options.bot)
        : { sent: 0, total: 0 };

      const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`✅ [Pipeline] Цикл успішно завершено за ${durationSec}с!`);
      console.log(`📊 Підсумок: спарсено ${scrapedVacancies.length}, збережено (локація) ${filteredVacancies.length}, нових матчів: ${newMatchesCreated}, надіслано в Telegram: ${notificationResult.sent}`);

      return {
        totalScraped: scrapedVacancies.length,
        filteredCount: filteredVacancies.length,
        newMatchesCreated,
        sentNotifications: notificationResult.sent,
        durationSec,
      };
    } catch (error) {
      console.error("❌ [Pipeline] Критична помилка під час виконання циклу:", error);
      throw error;
    } finally {
      // Завжди знімаємо лок, навіть у разі помилки
      this.isRunning = false;
    }
  }
}

export const orchestrator = new PipelineOrchestrator();
