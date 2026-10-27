import { Bot } from "grammy";
import { prisma } from "../db";
import { formatVacancyMessage, createVacancyKeyboard } from "./bot";

export const MIN_NOTIFY_SCORE = 70;

export class TelegramNotifierService {
  /**
   * Розсилає свіжі вакансії користувачам (зі статусу NEW переводить у SENT)
   */
  async notifyNewMatches(bot: Bot) {
    const newMatches = await prisma.match.findMany({
      where: {
        status: "NEW",
        reason: { not: null },
        score: { gte: MIN_NOTIFY_SCORE },
      },
      orderBy: { score: "desc" },
      include: {
        vacancy: true,
        user: true,
      },
      take: 10,
    });

    console.log(`📨 Знайдено ${newMatches.length} нових вакансій для розсилки в Telegram...`);

    let sentCount = 0;
    for (const match of newMatches) {
      try {
        const text = formatVacancyMessage(match);
        const isEvaluated = Boolean(match.reason && match.score > 0);
        const keyboard = createVacancyKeyboard(
          match.id,
          match.vacancy.url,
          isEvaluated,
          false
        );

        await bot.api.sendMessage(match.user.telegramId, text, {
          parse_mode: "HTML",
          reply_markup: keyboard,
        });

        // Позначаємо, що вакансія вже була надіслана користувачеві
        await prisma.match.update({
          where: { id: match.id },
          data: { status: "SENT" },
        });

        sentCount++;
      } catch (error) {
        console.error(`❌ Не вдалося надіслати повідомлення користувачеві ${match.user.telegramId}:`, error);
      }
    }

    return { total: newMatches.length, sent: sentCount };
  }
}
