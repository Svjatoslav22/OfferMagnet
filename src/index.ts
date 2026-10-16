import { DouScraper } from "./scrapers/dou.scraper.js";
import { VacancyService } from "./services/vacancy.service.js";
import { MatcherService } from "./ai/matcher.service.js";
import { prisma } from "./db.js";

async function main() {
  console.log("🚀 Запуск повного пайплайну: Парсер -> БД -> AI Matching Engine...\n");

  const scraper = new DouScraper();
  const vacancyService = new VacancyService();
  const matcherService = new MatcherService();

  // 1. Отримуємо тестового користувача з профілем
  const user = await prisma.user.findFirst({
    include: { profiles: true },
  });

  if (!user || user.profiles.length === 0) {
    throw new Error("Користувача не знайдено. Запустіть сід: npx prisma db seed");
  }

  const profile = user.profiles[0]!;
  console.log(`👤 Користувач: ${user.telegramId}`);
  console.log(`🎯 Профіль пошуку: ${profile.level} | ${profile.keywords.join(", ")} | ${profile.location}\n`);

  // 2. Парсимо актуальні вакансії з DOU
  console.log("🔍 [1/3] Перевіряємо свіжі вакансії на DOU...");
  const scraped = await scraper.scrape({ keyword: "Node.js", limit: 3 });
  console.log(`📦 Отримано ${scraped.length} вакансій.`);

  // 3. Зберігаємо нові вакансії в базу
  console.log("💾 [2/3] Зберігаємо вакансії в PostgreSQL...");
  await vacancyService.saveVacancies(scraped);

  // 4. Отримуємо всі вакансії з бази
  const allVacancies = await prisma.vacancy.findMany();
  console.log(`\n🤖 [3/3] Запускаємо AI Matching Engine для ${allVacancies.length} вакансій...`);

  for (const vacancy of allVacancies) {
    // Якщо матч вже існує з оцінкою, можна пропустити повторний запит до LLM (економимо токени)
    const existingMatch = await prisma.match.findUnique({
      where: {
        userId_vacancyId: {
          userId: user.id,
          vacancyId: vacancy.id,
        },
      },
    });

    if (existingMatch && existingMatch.reason) {
      console.log(`⏩ [Вже оцінено: ${existingMatch.score}/100] ${vacancy.title} (${vacancy.company})`);
      continue;
    }

    console.log(`⚡ Оцінюємо через Gemini: ${vacancy.title} (${vacancy.company})...`);
    await matcherService.matchAndSave(user.id, profile, vacancy);
  }

  // 5. Виводимо топ-матчі для користувача (Leaderboard)
  console.log(`\n══════════════════════ ТОП ВАКАНСІЙ ДЛЯ ВАС ══════════════════════`);
  const topMatches = await prisma.match.findMany({
    where: { userId: user.id },
    include: { vacancy: true },
    orderBy: { score: "desc" },
  });

  topMatches.forEach((m, idx) => {
    const badge = m.score >= 80 ? "🔥 ІДЕАЛЬНИЙ МАТЧ" : m.score >= 50 ? "👍 ВАРТО РОЗГЛЯНУТИ" : "❌ НИЗЬКИЙ ЗБІГ";
    console.log(`\n#${idx + 1} [${badge} - ${m.score}/100]`);
    console.log(`   💼 Позиція:   ${m.vacancy.title} @ ${m.vacancy.company}`);
    console.log(`   📍 Джерело:   ${m.vacancy.source} | URL: ${m.vacancy.url}`);
    console.log(`   💬 Вердикт:   ${m.reason}`);
    console.log(`   ✅ Навички:   ${m.matchedSkills.join(", ") || "немає"}`);
    console.log(`   ⚠️ Чого бракує: ${m.missingSkills.join(", ") || "все є"}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("\n🏁 Пайплайн завершено успішно!");
  })
  .catch(async (error) => {
    console.error("❌ Помилка виконання:", error);
    await prisma.$disconnect();
    process.exit(1);
  });