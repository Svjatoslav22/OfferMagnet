import React from "react";
import { prisma } from "../db";
import { DashboardApp, type DashboardJob, type DashboardProfile } from "../components/dashboard-app";

// Динамічний рендеринг для завжди актуальних даних
export const dynamic = "force-dynamic";

export default async function Page() {
  // 1. Отримуємо пошуковий профіль користувача
  const profileRecord = await prisma.searchProfile.findFirst();
  const profile: DashboardProfile = {
    level: profileRecord?.level || "Junior",
    keywords: profileRecord?.keywords || ["TypeScript", "React", "Node.js"],
    location: profileRecord?.location || "Remote / Львів",
    minSalary: profileRecord?.minSalary ?? 350,
    maxSalary: profileRecord?.maxSalary ?? 700,
  };

  // 2. Отримуємо всі оцінені вакансії
  const matches = await prisma.match.findMany({
    include: {
      vacancy: true,
    },
    orderBy: {
      score: "desc",
    },
  });

  const jobs: DashboardJob[] = matches.map((m) => ({
    id: m.id,
    title: m.vacancy.title,
    company: m.vacancy.company,
    location: m.vacancy.location || "Remote",
    salary: m.vacancy.salary || "Не вказано",
    source: m.vacancy.source,
    status: m.status,
    score: m.score,
    explanation: m.reason || "Оцінено ШІ агентом",
    matchedSkills: m.matchedSkills,
    missingSkills: m.missingSkills,
    url: m.vacancy.url,
  }));

  return (
    <DashboardApp
      initialJobs={jobs}
      initialProfile={profile}
      telegramUsername="offermagnet_dev_bot"
    />
  );
}
