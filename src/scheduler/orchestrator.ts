import { DouScraper } from "../scrapers/dou.scraper";
import { DjinniScraper } from "../scrapers/djinni.scraper";
import { WorkUaScraper } from "../scrapers/work-ua.scraper";
import { RobotaUaScraper } from "../scrapers/robota-ua.scraper";
import { VacancyService } from "../services/vacancy.service";
import { MatcherService } from "../ai/matcher.service";
import { TelegramNotifierService } from "../bot/notifier.service";
import { prisma } from "../db";
import type { Bot } from "grammy";

export class PipelineOrchestrator {
  private isRunning = false;
  private douScraper = new DouScraper();
  private djinniScraper = new DjinniScraper();
  private workUaScraper = new WorkUaScraper();
  private robotaUaScraper = new RobotaUaScraper();
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

      // 2. Паралельний збір з 4 джерел (DOU, Djinni, Work.ua, Robota.ua) через Promise.allSettled
      console.log(`🔍 [Pipeline] Збираємо вакансії для запиту: "${searchKeyword}" з 4 джерел (DOU, Djinni, Work.ua, Robota.ua)...`);
      const [douResult, djinniResult, workUaResult, robotaUaResult] = await Promise.allSettled([
        this.douScraper.scrape({ keyword: searchKeyword, limit: 5 }),
        this.djinniScraper.scrape({ keyword: searchKeyword, limit: 5 }),
        this.workUaScraper.scrape({ keyword: searchKeyword, limit: 5 }),
        this.robotaUaScraper.scrape({ keyword: searchKeyword, limit: 5 }),
      ]);

      const scrapedVacancies = [
        ...(douResult.status === "fulfilled" ? douResult.value : []),
        ...(djinniResult.status === "fulfilled" ? djinniResult.value : []),
        ...(workUaResult.status === "fulfilled" ? workUaResult.value : []),
        ...(robotaUaResult.status === "fulfilled" ? robotaUaResult.value : []),
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

      console.log(`📦 [Pipeline] Успішно спарсено: ${scrapedVacancies.length} вакансій.`);

      // 3. Зберігаємо у PostgreSQL через upsert
      await this.vacancyService.saveVacancies(scrapedVacancies);

      // 4. AI-скоринг для кожного користувача за неоціненими вакансіями
      let newEvaluations = 0;
      const allVacancies = await prisma.vacancy.findMany({
        orderBy: { postedAt: "desc" },
        take: 40,
      });

      for (const profile of profiles) {
        for (const vacancy of allVacancies) {
          const existingMatch = await prisma.match.findUnique({
            where: {
              userId_vacancyId: {
                userId: profile.userId,
                vacancyId: vacancy.id,
              },
            },
          });

          // Якщо вже оцінено — не спалюємо токени LLM
          if (existingMatch && existingMatch.reason) {
            continue;
          }

          console.log(`🤖 [Pipeline] Оцінюємо через Gemini: [${vacancy.source}] ${vacancy.title}...`);
          await this.matcherService.matchAndSave(profile.userId, profile, vacancy);
          newEvaluations++;
        }
      }

      // 5. Сповіщення в Telegram про гарячі вакансії (score >= minScore)
      const minScore = options.minScore ?? 70;
      const notificationResult = options.bot
        ? await this.notifier.notifyNewMatches(options.bot, minScore)
        : { sent: 0, total: 0 };

      const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`✅ [Pipeline] Цикл успішно завершено за ${durationSec}с!`);
      console.log(`📊 Підсумок: спарсено ${scrapedVacancies.length}, нових AI-оцінок: ${newEvaluations}, надіслано в Telegram: ${notificationResult.sent}`);

      return {
        totalScraped: scrapedVacancies.length,
        newEvaluations,
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
