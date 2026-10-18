"use server";

import { prisma } from "../db";
import { orchestrator } from "../scheduler/orchestrator";
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
 * Server Action для запуску сканування ринку прямо з веб-дашборду
 */
export async function triggerScanAction() {
  try {
    const result = await orchestrator.runFullCycle({
      triggeredBy: "Web Dashboard UI",
      minScore: 70,
    });

    revalidatePath("/");
    return { success: true, result };
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
