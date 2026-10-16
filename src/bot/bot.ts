import "dotenv/config";
import { Bot, InlineKeyboard } from "grammy";
import { prisma } from "../db.js";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.warn("⚠️ УВАГА: TELEGRAM_BOT_TOKEN не задано в .env!");
}

export const bot = new Bot(token || "dummy_token");

/**
 * Форматує гарне повідомлення про вакансію для Telegram
 */
export function formatVacancyMessage(match: {
  score: number;
  reason: string | null;
  vacancy: {
    title: string;
    company: string;
    source: string;
    url: string;
    description: string;
  };
}) {
  const emoji = match.score >= 80 ? "🔥 ІДЕАЛЬНИЙ ЗБІГ" : "👍 ГАРНИЙ ВАРІАНТ";

  return `<b>${emoji} (${match.score}/100)</b>
💼 <b>Позиція:</b> ${match.vacancy.title}
🏢 <b>Компанія:</b> ${match.vacancy.company}
📍 <b>Джерело:</b> ${match.vacancy.source}

💬 <b>Вердикт ШІ:</b>
<i>${match.reason || "Підходить під ваш профіль"}</i>`;
}

/**
 * Створює інтерактивну клавіатуру для вакансії
 */
export function createVacancyKeyboard(matchId: string, vacancyUrl: string) {
  return new InlineKeyboard()
    .url("🔗 Відгукнутися", vacancyUrl)
    .row()
    .text("💡 Skill Gap", `gap:${matchId}`)
    .text("❌ Відхилити", `reject:${matchId}`);
}

// ─── ХЕНДЛЕРИ КОМАНД ──────────────────────────────────────────────

// /start
bot.command("start", async (ctx) => {
  const telegramId = ctx.from?.id.toString();
  if (!telegramId) return;

  // Отримуємо або створюємо користувача в базі
  let user = await prisma.user.findUnique({
    where: { telegramId },
    include: { profiles: true },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        telegramId,
        profiles: {
          create: {
            keywords: ["TypeScript", "Node.js", "React", "Next.js"],
            level: "Junior",
            location: "Remote",
            minSalary: 800,
            maxSalary: 1500,
          },
        },
      },
      include: { profiles: true },
    });
  }

  const profile = user.profiles[0];
  const greeting = `👋 <b>Привіт, ${ctx.from?.first_name || "колего"}!</b>

Я твій персональний <b>AI Job Search Agent</b> (OfferMagnet).

🎯 <b>Поточний профіль пошуку:</b>
• Рівень: <code>${profile?.level || "Junior"}</code>
• Стек: <code>${profile?.keywords.join(", ") || "TypeScript, Node.js"}</code>
• Формат: <code>${profile?.location || "Remote"}</code>
• Очікування: <code>$${profile?.minSalary || 800} - $${profile?.maxSalary || 1500}</code>

Команди:
/matches — переглянути гарячі вакансії прямо зараз
/profile — налаштування пошукового профілю`;

  await ctx.reply(greeting, { parse_mode: "HTML" });
});

// /matches — показує топ гарячих вакансій
bot.command("matches", async (ctx) => {
  const telegramId = ctx.from?.id.toString();
  if (!telegramId) return;

  const user = await prisma.user.findUnique({
    where: { telegramId },
  });

  if (!user) {
    await ctx.reply("Спершу надішліть /start для реєстрації.");
    return;
  }

  const topMatches = await prisma.match.findMany({
    where: {
      userId: user.id,
      score: { gte: 50 }, // показуємо тільки релевантні (50+)
    },
    include: { vacancy: true },
    orderBy: { score: "desc" },
    take: 3,
  });

  if (topMatches.length === 0) {
    await ctx.reply("Поки що немає оцінених вакансій зі скором 50+. Запустіть парсер!");
    return;
  }

  for (const match of topMatches) {
    const text = formatVacancyMessage(match);
    const keyboard = createVacancyKeyboard(match.id, match.vacancy.url);
    await ctx.reply(text, { parse_mode: "HTML", reply_markup: keyboard });
  }
});

// ─── ХЕНДЛЕРИ КНОПОК (CALLBACK QUERIES) ────────────────────────────

// 💡 Skill Gap (Показати навички)
bot.callbackQuery(/^gap:(.+)$/, async (ctx) => {
  const matchId = ctx.match[1];
  if (!matchId) return;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
  });

  if (!match) {
    await ctx.answerCallbackQuery({ text: "Матч не знайдено." });
    return;
  }

  const matched = match.matchedSkills.length ? match.matchedSkills.join(", ") : "—";
  const missing = match.missingSkills.length ? match.missingSkills.join(", ") : "Всі ключові вимоги є!";

  const alertText = `📊 Аналіз навичок:\n\n✅ Співпало: ${matched}\n\n⚠️ Бракує: ${missing}`;

  // Показуємо модальне спливаюче вікно в Telegram
  await ctx.answerCallbackQuery({
    text: alertText,
    show_alert: true,
  });
});

// ❌ Відхилити вакансію
bot.callbackQuery(/^reject:(.+)$/, async (ctx) => {
  const matchId = ctx.match[1];
  if (!matchId) return;

  await prisma.match.update({
    where: { id: matchId },
    data: { status: "REJECTED" },
  });

  await ctx.answerCallbackQuery({ text: "Вакансію відхилено." });

  // Оновлюємо повідомлення в чаті
  try {
    await ctx.editMessageText(
      `${ctx.msg?.text || ""}\n\n<i>❌ Вакансію відхилено вами</i>`,
      { parse_mode: "HTML" }
    );
  } catch (e) {
    // ігноруємо якщо текст не змінився
  }
});
