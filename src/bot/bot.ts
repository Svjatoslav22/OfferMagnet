import "dotenv/config";
import { Bot, InlineKeyboard } from "grammy";
import { prisma } from "../db.js";
import { orchestrator } from "../scheduler/orchestrator.js";

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

⚡ <b>Команди:</b>
/scan — миттєво запустити збір DOU + Djinni та аналіз ШІ
/matches — переглянути збережені гарячі вакансії
/profile — налаштування пошукового профілю`;

  await ctx.reply(greeting, { parse_mode: "HTML" });
});

// /scan — ручний запуск збору та ШІ-аналізу вакансій
bot.command("scan", async (ctx) => {
  await ctx.reply("🔍 <b>Починаю пошук свіжих вакансій (DOU + Djinni)...</b>\nЗачекайте декілька секунд: парсимо сайти та передаємо нові позиції на оцінку Gemini.", {
    parse_mode: "HTML",
  });

  try {
    const result = await orchestrator.runFullCycle({
      bot,
      triggeredBy: `Telegram /scan від @${ctx.from?.username || ctx.from?.id}`,
      minScore: 70,
    });

    if (result.skipped) {
      await ctx.reply("⚠️ Цикл сканування вже виконується прямо зараз. Будь ласка, зачекайте завершення.");
      return;
    }

    const report = `🎉 <b>Сканування завершено!</b>

📦 Отримано вакансій: <b>${result.totalScraped}</b>
🤖 Оцінено нових через ШІ: <b>${result.newEvaluations}</b>
📨 Надіслано гарячих у чат: <b>${result.sentNotifications}</b>
⏱️ Час виконання: <b>${result.durationSec}с</b>

Натисніть /matches, щоб переглянути ваші найкращі збережені пропозиції!`;

    await ctx.reply(report, { parse_mode: "HTML" });
  } catch (error) {
    console.error("Помилка під час /scan:", error);
    await ctx.reply("❌ Сталася помилка під час виконання сканування. Перевірте лог сервера.");
  }
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

// /profile — перегляд та налаштування пошукового профілю
bot.command("profile", async (ctx) => {
  const telegramId = ctx.from?.id.toString();
  if (!telegramId) return;

  const user = await prisma.user.findUnique({
    where: { telegramId },
    include: { profiles: true },
  });

  if (!user || user.profiles.length === 0) {
    await ctx.reply("Профіль не знайдено. Надішліть /start для створення.");
    return;
  }

  const profile = user.profiles[0]!;

  const text = `⚙️ <b>Ваш пошуковий профіль:</b>

• <b>Рівень:</b> <code>${profile.level}</code>
• <b>Стек / Ключові слова:</b> <code>${profile.keywords.join(", ")}</code>
• <b>Локація:</b> <code>${profile.location}</code>
• <b>Очікувана зарплата:</b> <code>$${profile.minSalary ?? 0} - $${profile.maxSalary ?? "не вказано"}</code>

<i>Швидке перемикання рівня:</i>`;

  const keyboard = new InlineKeyboard()
    .text(profile.level === "Junior" ? "✅ Junior" : "Junior", "set_level:Junior")
    .text(profile.level === "Middle" ? "✅ Middle" : "Middle", "set_level:Middle")
    .text(profile.level === "Senior" ? "✅ Senior" : "Senior", "set_level:Senior")
    .row();

  await ctx.reply(text, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

// /setskills — змінити ключові слова профілю (наприклад: /setskills TypeScript, React, Node.js)
bot.command("setskills", async (ctx) => {
  const telegramId = ctx.from?.id.toString();
  const input = ctx.match?.trim();

  if (!telegramId || !input) {
    await ctx.reply("ℹ️ Вкажіть навички через кому. Приклад:\n<code>/setskills TypeScript, React, Node.js, Next.js</code>", {
      parse_mode: "HTML",
    });
    return;
  }

  const skills = input.split(",").map((s) => s.trim()).filter(Boolean);

  const user = await prisma.user.findUnique({
    where: { telegramId },
    include: { profiles: true },
  });

  if (!user || user.profiles.length === 0) {
    await ctx.reply("Спершу надішліть /start.");
    return;
  }

  const profile = user.profiles[0]!;
  await prisma.searchProfile.update({
    where: { id: profile.id },
    data: { keywords: skills },
  });

  await ctx.reply(`✅ <b>Навички оновлено:</b>\n<code>${skills.join(", ")}</code>\n\nТепер AI-агент оцінюватиме вакансії за цим новим стеком!`, {
    parse_mode: "HTML",
  });
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

// 🔄 Зміна рівня в профілі (set_level:Junior / Middle / Senior)
bot.callbackQuery(/^set_level:(Junior|Middle|Senior)$/, async (ctx) => {
  const newLevel = ctx.match[1];
  const telegramId = ctx.from?.id.toString();
  if (!newLevel || !telegramId) return;

  const user = await prisma.user.findUnique({
    where: { telegramId },
    include: { profiles: true },
  });

  if (!user || user.profiles.length === 0) {
    await ctx.answerCallbackQuery({ text: "Профіль не знайдено." });
    return;
  }

  const profile = user.profiles[0]!;
  await prisma.searchProfile.update({
    where: { id: profile.id },
    data: { level: newLevel },
  });

  await ctx.answerCallbackQuery({ text: `✅ Рівень змінено на: ${newLevel}` });

  // Оновлюємо клавіатуру з позначкою активного рівня
  const keyboard = new InlineKeyboard()
    .text(newLevel === "Junior" ? "✅ Junior" : "Junior", "set_level:Junior")
    .text(newLevel === "Middle" ? "✅ Middle" : "Middle", "set_level:Middle")
    .text(newLevel === "Senior" ? "✅ Senior" : "Senior", "set_level:Senior")
    .row();

  const text = `⚙️ <b>Ваш пошуковий профіль:</b>

• <b>Рівень:</b> <code>${newLevel}</code>
• <b>Стек / Ключові слова:</b> <code>${profile.keywords.join(", ")}</code>
• <b>Локація:</b> <code>${profile.location}</code>
• <b>Очікувана зарплата:</b> <code>$${profile.minSalary ?? 0} - $${profile.maxSalary ?? "не вказано"}</code>

<i>Швидке перемикання рівня:</i>`;

  try {
    await ctx.editMessageText(text, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
  } catch (e) {
    // ігноруємо якщо текст не змінився
  }
});

