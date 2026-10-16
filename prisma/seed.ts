import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Запуск сідування бази даних...");

  // 1. Створюємо тестового користувача з пошуковим профілем
  const user = await prisma.user.upsert({
    where: { telegramId: "123456789" },
    update: {},
    create: {
      telegramId: "123456789",
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
    include: {
      profiles: true,
    },
  });

  console.log("✅ Користувач готовий:", {
    id: user.id,
    telegramId: user.telegramId,
    profilesCount: user.profiles.length,
  });

  // 2. Створюємо тестову вакансію (DOU) - релевантна під профіль
  const vacancyDou = await prisma.vacancy.upsert({
    where: {
      source_externalId: {
        source: "DOU",
        externalId: "dou-245891",
      },
    },
    update: {},
    create: {
      source: "DOU",
      externalId: "dou-245891",
      title: "Junior Full-Stack / Node.js Developer",
      company: "TechNova",
      description:
        "Шукаємо вмотивованого Junior Full-Stack розробника (Node.js, TypeScript, React). Робота з PostgreSQL, Prisma та REST API. Remote.",
      url: "https://jobs.dou.ua/vacancies/245891/",
      postedAt: new Date(),
    },
  });

  // 3. Створюємо тестову вакансію (Work.ua) - нерелевантна (для тесту відсіювання AI)
  const vacancyWork = await prisma.vacancy.upsert({
    where: {
      source_externalId: {
        source: "WORK_UA",
        externalId: "work-5612344",
      },
    },
    update: {},
    create: {
      source: "WORK_UA",
      externalId: "work-5612344",
      title: "Senior Python / Django Architect",
      company: "Global Logistics Inc",
      description:
        "Looking for a Senior Python Developer with 5+ years of experience in Django, Celery, Kubernetes and microservices.",
      url: "https://www.work.ua/jobs/5612344/",
      postedAt: new Date(),
    },
  });

  console.log("✅ Тестові вакансії створено:");
  console.log(`- [${vacancyDou.source}] ${vacancyDou.title} (${vacancyDou.company})`);
  console.log(`- [${vacancyWork.source}] ${vacancyWork.title} (${vacancyWork.company})`);

  console.log("🎉 База даних успішно наповнена початковими даними!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Помилка під час сідування:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
