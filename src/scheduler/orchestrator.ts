import { DouScraper } from "../scrapers/dou.scraper";
import { DjinniScraper } from "../scrapers/djinni.scraper";
import { WorkUaScraper } from "../scrapers/work-ua.scraper";
import { RobotaUaScraper } from "../scrapers/robota-ua.scraper";
import { JobicoScraper } from "../scrapers/jobico.scraper";
import { VacancyService } from "../services/vacancy.service";
import { MatcherService } from "../ai/matcher.service";
import { TelegramNotifierService } from "../bot/notifier.service";
import { prisma } from "../db";
import { isAboveJuniorTitle } from "../services/seniority-filter";
import type { Bot } from "grammy";

/**
 * Перевіряє, чи вакансія відповідає бажаній локації кандидата (Remote / Місто)
 */
export function matchesLocation(
  vacancy: {
    location?: string | null | undefined;
    title?: string | undefined;
    description?: string | undefined;
  },
  targetLocationStr: string
): boolean {
  if (!targetLocationStr || targetLocationStr.trim() === "") return true;

  const targetTokens = targetLocationStr
    .toLowerCase()
    .split(/[/,;|]+|\s+та\s+|\s+і\s+|\s+and\s+|\s+or\s+/)
    .map((t) => t.trim())
    .filter(Boolean);

  const allowsRemote = targetTokens.some((t) =>
    ["remote", "віддалено", "дистанційно", "online", "онлайн", "вся україна"].includes(t)
  );

  // Отримуємо міста з профілю (все, що не позначає Remote)
  const targetCities = targetTokens.filter(
    (t) => !["remote", "віддалено", "дистанційно", "online", "онлайн", "вся україна"].includes(t)
  );

  const loc = (vacancy.location || "").toLowerCase();
  const text = `${vacancy.title || ""} ${vacancy.description || ""}`.toLowerCase();

  // 1. Якщо вакансія пропонує віддалену роботу, і кандидат готовий до Remote:
  const isVacancyRemote =
    loc.includes("remote") ||
    loc.includes("віддален") ||
    loc.includes("дистанційн") ||
    loc.includes("онлайн") ||
    loc.includes("online") ||
    loc.includes("вся україна") ||
    loc.includes("будь-яке місто") ||
    text.includes("віддалена робота") ||
    text.includes("можливість працювати віддалено") ||
    text.includes("remote work");

  if (allowsRemote && isVacancyRemote) {
    return true;
  }

  // 2. Якщо вакансія знаходиться в одному з цільових міст кандидата:
  for (const city of targetCities) {
    if (loc.includes(city)) return true;
    if (city === "львів" && (loc.includes("lviv") || loc.includes("львові"))) return true;
    if (city === "київ" && (loc.includes("kyiv") || loc.includes("kiev") || loc.includes("києві"))) return true;
    if (city === "одеса" && (loc.includes("odesa") || loc.includes("odessa"))) return true;
    if (city === "харків" && loc.includes("kharkiv")) return true;
    if (city === "дніпро" && loc.includes("dnipro")) return true;
  }

  // 3. Якщо вакансія суто офлайн в іншому місті (наприклад, Київ офіс при бажанні Remote / Львів) — відсіюємо
  return false;
}

export class PipelineOrchestrator {
  private isRunning = false;
  private douScraper = new DouScraper();
  private djinniScraper = new DjinniScraper();
  private workUaScraper = new WorkUaScraper();
  private robotaUaScraper = new RobotaUaScraper();
  private jobicoScraper = new JobicoScraper();
  private vacancyService = new VacancyService();
  private matcherService = new MatcherService();
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
      const searchKeyword = allKeywords[0] || "Node.js";

      // Основний профіль налаштувань для формування точних URL-запитів.
      // У схемі поля називаються keywords (навички) та level (грейд).
      const mainProfile = await prisma.searchProfile.findFirst();
      const profileKeyword = mainProfile?.keywords?.[0];
      const seniority = mainProfile?.level;
      const queryKeyword = profileKeyword || searchKeyword;

      // 2. Паралельний збір з 5 джерел (DOU, Djinni, Work.ua, Robota.ua, Jobico) через Promise.allSettled
      console.log(`🔍 [Pipeline] Збираємо вакансії для запиту: "${queryKeyword}" (рівень: ${seniority || "Junior"}) з 5 джерел (DOU, Djinni, Work.ua, Robota.ua, Jobico)...`);
      const scrapeOpts = { keyword: queryKeyword, seniority, limit: 5 };
      const [douResult, djinniResult, workUaResult, robotaUaResult, jobicoResult] = await Promise.allSettled([
        this.douScraper.scrape(scrapeOpts),
        this.djinniScraper.scrape(scrapeOpts),
        this.workUaScraper.scrape(scrapeOpts),
        this.robotaUaScraper.scrape(scrapeOpts),
        this.jobicoScraper.scrape(scrapeOpts),
      ]);

      const scrapedVacancies = [
        ...(douResult.status === "fulfilled" ? douResult.value : []),
        ...(djinniResult.status === "fulfilled" ? djinniResult.value : []),
        ...(workUaResult.status === "fulfilled" ? workUaResult.value : []),
        ...(robotaUaResult.status === "fulfilled" ? robotaUaResult.value : []),
        ...(jobicoResult.status === "fulfilled" ? jobicoResult.value : []),
      ];

      if (douResult.status === "rejected") {
        console.error("❌ [Pipeline] Помилка DOU парсера:", douResult.reason);
      }
      if (djinniResult.status === "rejected") {
        console.error("❌ [Pipeline] Помилка Djinni парсера:", djinniResult.reason);
      }
      if (workUaResult.status === "rejected") {
        console.error("❌ [Pipeline] Помилка Work.ua парсера:", workUaResult.reason);
      }
      if (robotaUaResult.status === "rejected") {
        console.error("❌ [Pipeline] Помилка Robota.ua парсера:", robotaUaResult.reason);
      }
      if (jobicoResult.status === "rejected") {
        console.error("❌ [Pipeline] Помилка Jobico парсера:", jobicoResult.reason);
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

      // 2.6. Жорсткий фільтр рівня: Senior/Lead/Principal/Middle/Staff у тайтлі — не зберігаємо
      const juniorVacancies = filteredVacancies.filter((v) => !isAboveJuniorTitle(v.title));
      console.log(
        `🎓 [Pipeline] Фільтр рівня: залишено ${juniorVacancies.length} із ${filteredVacancies.length} (відсіяно ${filteredVacancies.length - juniorVacancies.length} Senior/Lead/Middle).`
      );

      // 3. Зберігаємо у PostgreSQL ТІЛЬКИ відфільтровані за локацією та рівнем вакансії
      await this.vacancyService.saveVacancies(juniorVacancies);

      // 4. On-Demand AI: Створюємо записи Match зі статусом NEW (БЕЗ спалювання токенів LLM)
      let newMatchesCreated = 0;
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
          // Не створюємо Match для Senior/Lead/Middle (навіть якщо вакансія вже була в базі)
          if (isAboveJuniorTitle(vacancy.title)) {
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
          }
        }
      }

      console.log(`✨ [Pipeline] Створено ${newMatchesCreated} нових нерозібраних матчів (очікують оцінки за запитом).`);

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
