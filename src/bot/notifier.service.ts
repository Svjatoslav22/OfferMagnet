import { Bot } from "grammy";
import { prisma } from "../db";
import { formatVacancyMessage, createVacancyKeyboard } from "./bot";

export class TelegramNotifierService {
  /**
   * Розсилає нові гарячі вакансії користувачам (зі статусу NEW переводить у SENT)
   */
  async notifyNewMatches(bot: Bot, minScore = 70) {
    const newMatches = await prisma.match.findMany({
      where: {
        status: "NEW",
        score: { gte: minScore },
      },
      include: {
        vacancy: true,
        user: true,
      },
    });

    console.log(`📨 Знайдено ${newMatches.length} нових гарячих вакансій для розсилки...`);

    let sentCount = 0;
    for (const match of newMatches) {
      try {
        const text = formatVacancyMessage(match);
        const keyboard = createVacancyKeyboard(match.id, match.vacancy.url);

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
