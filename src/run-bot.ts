import "dotenv/config";
import { bot } from "./bot/bot";
import { prisma } from "./db";
import { initCronScheduler } from "./scheduler/cron";
import { orchestrator } from "./scheduler/orchestrator";
import { startJobWorker } from "./worker/job-worker";

async function main() {
  if (!process.env.TELEGRAM_BOT_TOKEN) {
    console.error("❌ Помилка: Додайте TELEGRAM_BOT_TOKEN у файл .env перед запуском бота!");
    process.exit(1);
  }

  console.log("🤖 Запуск Telegram-бота OfferMagnet...");

  // 1. Ініціалізуємо автономний CRON-планувальник (кожні 2 години)
  const cronTask = initCronScheduler(bot);

  // 1.0. Одноразовий цикл пошуку одразу при старті (у фоні). RUN_ON_START=false вимикає.
  if (process.env.RUN_ON_START !== "false") {
    void (async () => {
      try {
        console.log("🚀 [START] Запуск початкового циклу пошуку...");
        await orchestrator.runFullCycle({ bot, triggeredBy: "CRON" });
      } catch (err) {
        console.error("❌ [START] Помилка початкового циклу:", err);
      }
    })();
  }

  // 1.1. Запускаємо обробник черги завдань (авто-відгуки та скани, створені з веб-дашборду)
  const stopWorker = await startJobWorker(bot);
  // 2. Запуск бота в режимі Long Polling
  bot.start({
    onStart: (botInfo) => {
      console.log(`✅ Бот успішно запущений як @${botInfo.username}`);
      console.log(`👉 Відкрийте Telegram, знайдіть @${botInfo.username} і надішліть /start або /scan`);
    },
  });

  // Graceful shutdown
  const stopBot = async () => {
    console.log("\n🛑 Зупинка бота та планувальника...");
    cronTask.stop();
    await stopWorker();
    await bot.stop();
    await prisma.$disconnect();
    process.exit(0);
  };

  process.once("SIGINT", stopBot);
  process.once("SIGTERM", stopBot);
}

main().catch((err) => {
  console.error("❌ Критична помилка бота:", err);
});
