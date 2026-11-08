import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { computeKeywordScore } from "../src/services/keyword-score.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function rescoreMatches() {
  console.log("🔄 Початок перерахунку score для матчів без ШІ-оцінки...");

  const matches = await prisma.match.findMany({
    where: {
      status: "NEW",
      reason: null,
    },
    include: {
      vacancy: true,
      user: {
        include: {
          profiles: true,
        },
      },
    },
  });

  console.log(`📋 Знайдено матчів для перерахунку: ${matches.length}`);

  let updatedCount = 0;

  for (const match of matches) {
    const keywords = match.user.profiles[0]?.keywords ?? [];
    const newScore = computeKeywordScore(
      {
        title: match.vacancy.title,
        description: match.vacancy.description,
        location: match.vacancy.location,
        salary: match.vacancy.salary,
      },
      keywords
    );

    if (newScore !== match.score) {
      await prisma.match.update({
        where: { id: match.id },
        data: { score: newScore },
      });
      updatedCount++;
    }
  }

  console.log(`✅ Перераховано все (${matches.length}), змінено score у ${updatedCount} записах.`);
}

rescoreMatches()
  .catch((err) => {
    console.error("❌ Помилка під час перерахунку score:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

