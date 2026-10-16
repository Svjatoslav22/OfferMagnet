import "dotenv/config";
import { bot } from "./bot/bot.js";
import { prisma } from "./db.js";

async function main() {
  if (!process.env.TELEGRAM_BOT_TOKEN) {
    console.error("❌ Помилка: Додайте TELEGRAM_BOT_TOKEN у файл .env перед запуском бота!");
    process.exit(1);
  }

  console.log("🤖 Запуск Telegram-бота OfferMagnet...");

  // Запуск бота в режимі Long Polling
  bot.start({
    onStart: (botInfo) => {
      console.log(`✅ Бот успішно запущений як @${botInfo.username}`);
      console.log(`👉 Відкрийте Telegram, знайдіть @${botInfo.username} і надішліть /start`);
    },
  });

  // Graceful shutdown
  const stopBot = async () => {
    console.log("\n🛑 Зупинка бота...");
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
