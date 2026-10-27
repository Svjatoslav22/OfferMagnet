"use server";

import { prisma } from "../db";
import { MatcherService } from "../ai/matcher.service";
import { revalidatePath } from "next/cache";
import type { MatchStatus } from "@prisma/client";

/**
 * Server Action для зміни статусу вакансії на Kanban-дошці
 */
export async function updateMatchStatus(matchId: string, newStatus: MatchStatus) {
  try {
    await prisma.match.update({
      where: { id: matchId },
      data: { status: newStatus },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Помилка оновлення статусу:", error);
    return { success: false, error: "Не вдалося оновити статус вакансії" };
  }
}

/**
 * Server Action: ставить сканування в чергу (виконує його бекенд-воркер)
 */
export async function triggerScanAction() {
  try {
    const active = await prisma.job.findFirst({
      where: { type: "SCAN", status: { in: ["PENDING", "RUNNING"] } },
    });
    if (!active) {
      await prisma.job.create({ data: { type: "SCAN" } });
    }

    revalidatePath("/");
    return { success: true, queued: true };
  } catch (error) {
    console.error("Помилка під час сканування:", error);
    return { success: false, error: "Помилка виконання збору вакансій" };
  }
}

/**
 * Server Action для оновлення пошукового профілю користувача
 */
export async function updateProfileSettingsAction(formData: {
  level: string;
  keywords: string[];
  location: string;
  minSalary?: number | null;
  maxSalary?: number | null;
}) {
  try {
    const firstProfile = await prisma.searchProfile.findFirst();
    if (!firstProfile) {
      return { success: false, error: "Профіль не знайдено" };
    }

    await prisma.searchProfile.update({
      where: { id: firstProfile.id },
      data: {
        level: formData.level,
        keywords: formData.keywords,
        location: formData.location,
        minSalary: formData.minSalary ?? null,
        maxSalary: formData.maxSalary ?? null,
      },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Помилка оновлення профілю:", error);
    return { success: false, error: "Не вдалося зберегти налаштування" };
  }
}

/**
 * Server Action для швидкої Smart Polling синхронізації з PostgreSQL (Telegram bot + CRON)
 */
export async function syncDashboardStateAction() {
  try {
    const profileRecord = await prisma.searchProfile.findFirst();
    const profile = {
      level: profileRecord?.level || "Junior",
      keywords: profileRecord?.keywords || ["TypeScript", "React", "Node.js"],
      location: profileRecord?.location || "Remote / Львів",
      minSalary: profileRecord?.minSalary ?? 350,
      maxSalary: profileRecord?.maxSalary ?? 700,
    };

    const matches = await prisma.match.findMany({
      include: {
        vacancy: true,
      },
      orderBy: {
        score: "desc",
      },
    });

    const activeScan = await prisma.job.findFirst({
      where: { type: "SCAN", status: { in: ["PENDING", "RUNNING"] } },
      select: { id: true },
    });

    const jobs = matches.map((m) => ({
      id: m.id,
      title: m.vacancy.title,
      company: m.vacancy.company,
      location: m.vacancy.location || "Remote",
      salary: m.vacancy.salary || "Не вказано",
      source: m.vacancy.source,
      status: m.status,
      score: m.score,
      explanation: m.reason || "",
      evaluated: m.reason !== null,
      matchedSkills: m.matchedSkills,
      missingSkills: m.missingSkills,
      url: m.vacancy.url,
      coverLetter: m.coverLetter,
      applyMessage: m.applyMessage,
    }));

    const lastScan = await prisma.job.findFirst({
      where: { type: "SCAN", status: "DONE", finishedAt: { not: null } },
      orderBy: { finishedAt: "desc" },
      select: { finishedAt: true },
    });

    return {
      success: true,
      jobs,
      profile,
      scanActive: !!activeScan,
      lastScanAt: lastScan?.finishedAt?.toISOString() ?? null,
    };
  } catch (error) {
    console.error("Помилка Smart Polling синхронізації:", error);
    return { success: false, error: "Не вдалося отримати актуальний стан бази" };
  }
}

/**
 * Server Action: ставить авто-відгук у чергу (PENDING_APPLY). Playwright виконує воркер.
 */
export async function autoApplyMatchAction(matchId: string) {
  try {
    const match = await prisma.match.findUnique({ where: { id: matchId } });

    if (!match) {
      return { success: false, error: "Вакансію не знайдено" };
    }
    if (match.status === "APPLIED" || match.status === "PENDING_APPLY") {
      return { success: false, error: "Відгук уже відправлено або в черзі" };
    }
    const active = await prisma.job.findFirst({
      where: { type: "APPLY", matchId, status: { in: ["PENDING", "RUNNING"] } },
    });
    if (active) {
      return { success: false, error: "Відгук уже в черзі" };
    }

    await prisma.$transaction([
      prisma.job.create({
        data: { type: "APPLY", matchId, previousStatus: match.status },
      }),
      prisma.match.update({
        where: { id: matchId },
        data: { status: "PENDING_APPLY", applyMessage: null },
      }),
    ]);

    revalidatePath("/");
    return { success: true, queued: true };
  } catch (error: any) {
    console.error("Помилка авто-відгуку в Server Action:", error);
    return {
      success: false,
      error: `Помилка авто-відгуку: ${error.message || error}`,
    };
  }
}

/**
 * Server Action для On-Demand оцінки вакансії через Gemini AI (з клієнтського дашборду)
 */
export async function evaluateMatchWithAiAction(matchId: string) {
  try {
    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: {
        vacancy: true,
        user: { include: { profiles: true } },
      },
    });

    if (!match) {
      return { success: false, error: "Матч не знайдено" };
    }

    const profile = match.user.profiles[0];
    if (!profile) {
      return { success: false, error: "Профіль кандидата не знайдено" };
    }

    const matcher = new MatcherService();
    const { match: updatedMatch, analysis } = await matcher.matchAndSave(
      match.userId,
      profile,
      match.vacancy
    );

    revalidatePath("/");
    return {
      success: true,
      score: analysis.score,
      reason: analysis.reason,
      matchedSkills: analysis.matchedSkills,
      missingSkills: analysis.missingSkills,
    };
  } catch (error) {
    console.error("Помилка On-Demand AI у Server Action:", error);
    return { success: false, error: "Не вдалося отримати оцінку ШІ" };
  }
}
