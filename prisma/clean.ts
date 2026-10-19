import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function cleanDatabase() {
  console.log("🧹 Початок очищення тестових даних у базі OfferMagnet...");

  // 1. Видаляємо всі матчі
  const deletedMatches = await prisma.match.deleteMany({});
  console.log(`✅ Видалено оцінених матчів: ${deletedMatches.count}`);

  // 2. Видаляємо всі вакансії
  const deletedVacancies = await prisma.vacancy.deleteMany({});
  console.log(`✅ Видалено тестових вакансій: ${deletedVacancies.count}`);

  // 3. Видаляємо мок-користувача 123456789 (разом з його профілем через cascade)
  const mockUser = await prisma.user.findUnique({
    where: { telegramId: "123456789" },
    include: { profiles: true },
  });

  if (mockUser) {
    await prisma.searchProfile.deleteMany({
      where: { userId: mockUser.id },
    });
    await prisma.user.delete({
      where: { id: mockUser.id },
    });
    console.log("✅ Видалено мок-користувача (telegramId: 123456789).");
  }

  // 4. Перевіряємо реального користувача
  const remainingUsers = await prisma.user.findMany({
    include: { profiles: true },
  });

  console.log("\n📊 Активні користувачі в базі після очищення:");
  for (const user of remainingUsers) {
    const profile = user.profiles[0];
    console.log(`👤 Telegram ID: ${user.telegramId}`);
    if (profile) {
      console.log(`   • Рівень: ${profile.level}`);
      console.log(`   • Стек: ${profile.keywords.join(", ")}`);
      console.log(`   • ЗП: $${profile.minSalary} - $${profile.maxSalary}`);
      console.log(`   • Локація: ${profile.location}`);
    }
  }

  console.log("\n✨ База даних успішно очищена і готова до чистого старту та деплою!");
}

cleanDatabase()
  .catch((err) => {
    console.error("❌ Помилка під час очищення:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
