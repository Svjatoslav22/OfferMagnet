import "dotenv/config";
import { Bot, InlineKeyboard } from "grammy";
import { prisma } from "../db";
import { orchestrator } from "../scheduler/orchestrator";
import { MatcherService } from "../ai/matcher.service";

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
    location?: string | null;
    salary?: string | null;
  };
}) {
  const isEvaluated = Boolean(match.reason && match.score > 0);
  const emoji = isEvaluated
    ? (match.score >= 80 ? `🔥 <b>ІДЕАЛЬНИЙ ЗБІГ (${match.score}/100)</b>` : `👍 <b>ГАРНИЙ ВАРІАНТ (${match.score}/100)</b>`)
    : `🆕 <b>НОВА ВАКАНСІЯ</b>`;

  const salaryText = match.vacancy.salary ? `<code>${match.vacancy.salary}</code>` : "<i>Не вказано</i>";
  const locationText = match.vacancy.location || "<i>Не вказано</i>";

  const aiSection = isEvaluated
    ? `💬 <b>Вердикт ШІ:</b>\n<i>${match.reason}</i>`
    : `🤖 <b>ШІ-аналіз:</b> <i>Очікує вашого запиту (натисніть кнопку нижче)</i>`;

  return `${emoji}
💼 <b>Позиція:</b> ${match.vacancy.title}
🏢 <b>Компанія:</b> ${match.vacancy.company}
💰 <b>Зарплата:</b> ${salaryText}
📍 <b>Локація:</b> ${locationText}
🌐 <b>Джерело:</b> ${match.vacancy.source}

${aiSection}`;
}

/**
 * Створює інтерактивну клавіатуру для вакансії
 */
export function createVacancyKeyboard(
  matchId: string,
  vacancyUrl: string,
  isEvaluated = false,
  isApplied = false
) {
  const kb = new InlineKeyboard();

  // Рядок 1: ШІ оцінка (або Skill Gap, якщо вже оцінено)
  if (!isEvaluated) {
    kb.text("🤖 Запитати думку ШІ", `ai:${matchId}`);
  } else {
    kb.text("💡 Skill Gap", `gap:${matchId}`);
  }
  kb.row();

  // Рядок 2: Прямий перегляд вакансії (без виклику ШІ та без зміни статусу на 'Відгукнувся')
  kb.url("🌐 Переглянути вакансію", vacancyUrl).row();

  // Рядок 3: Дії зі статусом (Відгукнутися / Відхилити)
  if (isApplied) {
    kb.url("👉 Подати резюме (вже відгукнувся)", vacancyUrl);
  } else {
    kb.text("🔗 Відгукнутися", `apply:${matchId}`);
  }
  kb.text("❌ Відхилити", `reject:${matchId}`);

  return kb;
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
/scan — миттєво запустити збір (DOU, Djinni, Work.ua, Robota.ua) та аналіз ШІ
/matches — переглянути збережені гарячі вакансії
/profile — налаштування пошукового профілю`;

  await ctx.reply(greeting, { parse_mode: "HTML" });
});

// /scan — ручний запуск збору та ШІ-аналізу вакансій
bot.command("scan", async (ctx) => {
  await ctx.reply("🔍 <b>Починаю пошук свіжих вакансій (DOU, Djinni, Work.ua, Robota.ua)...</b>\nЗачекайте декілька секунд: збираємо дані з 4 джерел та передаємо нові позиції на оцінку Gemini.", {
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

📦 Зібрано з 4 джерел: <b>${result.totalScraped}</b>
📍 Відповідають локації: <b>${result.filteredCount}</b>
✨ Нових збережених вакансій: <b>${result.newMatchesCreated}</b>
📨 Надіслано в чат: <b>${result.sentNotifications}</b>
⏱️ Час виконання: <b>${result.durationSec}с</b>

💡 <i>Оберіть цікаву вакансію нижче та натисніть [🤖 Запитати думку ШІ] для миттєвої оцінки!</i>`;

    await ctx.reply(report, { parse_mode: "HTML" });
  } catch (error) {
    console.error("Помилка під час /scan:", error);
    await ctx.reply("❌ Сталася помилка під час виконання сканування. Перевірте лог сервера.");
  }
});

// /matches — показує активні вакансії
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

  const matches = await prisma.match.findMany({
    where: {
      userId: user.id,
      status: { not: "REJECTED" },
    },
    include: { vacancy: true },
    orderBy: [{ score: "desc" }, { createdAt: "desc" }],
    take: 5,
  });

  if (matches.length === 0) {
    await ctx.reply("Поки що немає збережених вакансій. Запустіть /scan для збору!");
    return;
  }

  for (const match of matches) {
    const text = formatVacancyMessage(match);
    const isEvaluated = Boolean(match.reason && match.score > 0);
    const keyboard = createVacancyKeyboard(
      match.id,
      match.vacancy.url,
      isEvaluated,
      match.status === "APPLIED"
    );
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
• <b>Очікувана зарплата:</b> <code>$${profile.minSalary ?? 0} - $${profile.maxSalary ?? "не обмежено"}</code>

<i>Швидке перемикання рівня:</i>

💡 <i>Корисні команди налаштування:</i>
• <code>/setsalary 350 500</code> — змінити зарплатні очікування ($)
• <code>/setskills TypeScript, React, Node.js</code> — оновити стек`;

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

// /setsalary — змінити очікування по зарплаті (наприклад: /setsalary 350 400 або /setsalary 350)
bot.command("setsalary", async (ctx) => {
  const telegramId = ctx.from?.id.toString();
  const input = ctx.match?.trim();

  if (!telegramId || !input) {
    await ctx.reply(
      "ℹ️ Вкажіть бажану зарплату в $. Приклади:\n" +
      "• <code>/setsalary 350 500</code> — вилка від $350 до $500\n" +
      "• <code>/setsalary 400</code> — від $400",
      { parse_mode: "HTML" }
    );
    return;
  }

  const numbers = input.match(/\d+/g)?.map(Number);
  if (!numbers || numbers.length === 0) {
    await ctx.reply("❌ Не вдалося розпізнати число. Вкажіть суму, наприклад: <code>/setsalary 350 400</code>", {
      parse_mode: "HTML",
    });
    return;
  }

  const minSalary = numbers[0]!;
  const maxSalary = numbers.length > 1 ? numbers[1]! : null;

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
    data: {
      minSalary,
      maxSalary,
    },
  });

  const salaryDisplay = maxSalary ? `$${minSalary} - $${maxSalary}` : `від $${minSalary}`;
  await ctx.reply(
    `✅ <b>Зарплатні очікування оновлено!</b>\n` +
    `💰 Бажана вилка: <code>${salaryDisplay}</code>\n\n` +
    `Тепер ШІ оцінюватиме вакансії з урахуванням нових очікувань.`,
    { parse_mode: "HTML" }
  );
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

// 🤖 On-Demand AI: Запитати думку ШІ
bot.callbackQuery(/^ai:(.+)$/, async (ctx) => {
  const matchId = ctx.match[1];
  if (!matchId) return;

  await ctx.answerCallbackQuery({ text: "🤖 Gemini аналізує вакансію під ваш профіль..." });

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: {
      vacancy: true,
      user: { include: { profiles: true } },
    },
  });

  if (!match) {
    await ctx.reply("❌ Помилка: вакансію не знайдено в базі.");
    return;
  }

  const profile = match.user.profiles[0];
  if (!profile) {
    await ctx.reply("❌ Помилка: пошуковий профіль не знайдено.");
    return;
  }

  try {
    const matcher = new MatcherService();
    const { match: updatedMatch } = await matcher.matchAndSave(
      match.userId,
      profile,
      match.vacancy
    );

    const newText = formatVacancyMessage({
      score: updatedMatch.score,
      reason: updatedMatch.reason,
      vacancy: match.vacancy,
    });

    const newKeyboard = createVacancyKeyboard(
      updatedMatch.id,
      match.vacancy.url,
      true,
      updatedMatch.status === "APPLIED"
    );

    await ctx.editMessageText(newText, {
      parse_mode: "HTML",
      reply_markup: newKeyboard,
    });
  } catch (error) {
    console.error("Помилка On-Demand AI у боті:", error);
    await ctx.reply("❌ Не вдалося отримати оцінку ШІ. Спробуйте пізніше.");
  }
});

// 🔗 Відгукнутися (перехоплення кліку, оновлення статусу в БД на APPLIED та видача лінка)
bot.callbackQuery(/^apply:(.+)$/, async (ctx) => {
  const matchId = ctx.match[1];
  if (!matchId) return;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: { vacancy: true },
  });

  if (!match) {
    await ctx.answerCallbackQuery({ text: "Матч не знайдено." });
    return;
  }

  // 1. Оновлюємо статус у PostgreSQL
  await prisma.match.update({
    where: { id: matchId },
    data: { status: "APPLIED" },
  });

  await ctx.answerCallbackQuery({ text: "✅ Статус оновлено: 'Відгукнувся'!" });

  // 2. Оновлюємо розмітку поточної картки, роблячи кнопку прямим посиланням
  const isEvaluated = Boolean(match.reason && match.score > 0);
  const updatedKeyboard = createVacancyKeyboard(
    match.id,
    match.vacancy.url,
    isEvaluated,
    true
  );

  try {
    await ctx.editMessageReplyMarkup({
      reply_markup: updatedKeyboard,
    });
  } catch (e) {
    // ігноруємо, якщо розмітка не змінилася
  }

  // 3. Відправляємо окреме повідомлення з прямим клікабельним лінком
  await ctx.reply(
    `🎉 <b>Чудово! Статус оновлено на "Відгукнувся"</b>\n\n` +
    `💼 <b>${match.vacancy.title}</b> (${match.vacancy.company})\n\n` +
    `🔗 <b>Пряме посилання для подачі резюме:</b>\n${match.vacancy.url}`,
    { parse_mode: "HTML" }
  );
});

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

