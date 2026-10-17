import { orchestrator } from "./scheduler/orchestrator.js";
import { bot } from "./bot/bot.js";
import { prisma } from "./db.js";

async function main() {
  console.log("⚡ [Manual Run] Запуск повного пайплайну через Orchestrator...\n");

  const result = await orchestrator.runFullCycle({
    bot,
    triggeredBy: "Manual npm run dev",
    minScore: 70,
  });

  console.log("\n📊 Результат виконання:", result);

  // Виводимо топ-5 збережених матчів
  const topMatches = await prisma.match.findMany({
    include: { vacancy: true },
    orderBy: { score: "desc" },
    take: 5,
  });

  console.log(`\n══════════════════════ ТОП-5 МАТЧІВ У БАЗІ ══════════════════════`);
  topMatches.forEach((m, idx) => {
    const badge = m.score >= 80 ? "🔥" : m.score >= 50 ? "👍" : "❌";
    console.log(`${idx + 1}. ${badge} [${m.score}/100] [${m.vacancy.source}] ${m.vacancy.title} (${m.vacancy.company}) -> Статус: ${m.status}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("\n🏁 Завершено!");
  })
  .catch(async (e) => {
    console.error("❌ Помилка:", e);
    await prisma.$disconnect();
    process.exit(1);
  });