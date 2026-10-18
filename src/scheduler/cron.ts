import cron from "node-cron";
import { orchestrator } from "./orchestrator";
import type { Bot } from "grammy";

/**
 * Ініціалізує планувальник фонових задач CRON
 * За замовчуванням запускається кожні 2 години: '0 * / 2 * * *'
 * Для налаштування можна перевизначити через CRON_SCHEDULE у .env
 */
export function initCronScheduler(bot?: Bot) {
  const schedule = process.env.CRON_SCHEDULE || "0 */2 * * *";

  console.log(`⏱️ [CRON] Планувальник активовано за розкладом: "${schedule}"`);

  const task = cron.schedule(schedule, async () => {
    console.log(`\n⏰ [CRON] Спрацював таймер (${new Date().toLocaleTimeString()}). Запуск циклу...`);
    try {
      await orchestrator.runFullCycle({ bot, triggeredBy: "CRON" });
    } catch (err) {
      console.error("❌ [CRON] Помилка виконання циклу:", err);
    }
  });

  return task;
}
