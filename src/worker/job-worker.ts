import { prisma } from "../db";
import { orchestrator } from "../scheduler/orchestrator";
import { runApplyForMatch } from "../services/apply.pipeline";
import type { Bot } from "grammy";
import type { Job } from "@prisma/client";

const POLL_MS = Number(process.env.JOB_POLL_MS) || 3000;
const KEEP_FINISHED_DAYS = 7;

/**
 * При старті воркера: завдання, що застрягли в RUNNING (контейнер перезапустили посеред відгуку),
 * НЕ повторюємо автоматично — існує ризик подвійної відправки. Позначаємо як FAILED
 * і повертаємо картку у попередній статус, щоб користувач сам вирішив, чи повторювати.
 */
async function recoverInterruptedJobs() {
  const stuck = await prisma.job.findMany({ where: { status: "RUNNING" } });
  for (const job of stuck) {
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: "FAILED",
        finishedAt: new Date(),
        result: "Перервано перезапуском воркера. Перевірте стан вручну та повторіть за потреби.",
      },
    });
  }

  // Картки, що висять у PENDING_APPLY без активного завдання (наприклад, завдання видалили)
  const pendingMatches = await prisma.match.findMany({ where: { status: "PENDING_APPLY" } });
  for (const match of pendingMatches) {
    const active = await prisma.job.findFirst({
      where: { type: "APPLY", matchId: match.id, status: { in: ["PENDING", "RUNNING"] } },
    });
    if (!active) {
      const lastJob = await prisma.job.findFirst({
        where: { type: "APPLY", matchId: match.id },
        orderBy: { createdAt: "desc" },
      });
      await prisma.match.update({
        where: { id: match.id },
        data: {
          status: lastJob?.previousStatus ?? "SENT",
          applyMessage: "Відгук не виконано: завдання було перервано.",
        },
      });
    }
  }

  const cutoff = new Date(Date.now() - KEEP_FINISHED_DAYS * 24 * 60 * 60 * 1000);
  await prisma.job.deleteMany({
    where: { status: { in: ["DONE", "FAILED"] }, finishedAt: { lt: cutoff } },
  });

  if (stuck.length > 0) {
    console.warn(`⚠️ [Worker] Позначено ${stuck.length} перерваних завдань як FAILED.`);
  }
}

/** Атомарно захоплює найстаріше завдання; безпечно навіть якщо воркерів буде кілька */
async function claimNextJob(): Promise<Job | null> {
  const candidate = await prisma.job.findFirst({
    where: { status: "PENDING" },
    orderBy: { createdAt: "asc" },
  });
  if (!candidate) return null;

  const claimed = await prisma.job.updateMany({
    where: { id: candidate.id, status: "PENDING" },
    data: { status: "RUNNING", startedAt: new Date() },
  });
  return claimed.count === 1 ? candidate : null;
}

async function notifyOwner(bot: Bot | undefined, matchId: string, text: string) {
  if (!bot) return;
  try {
    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: { user: true },
    });
    if (match?.user.telegramId) {
      await bot.api.sendMessage(match.user.telegramId, text, { parse_mode: "HTML" });
    }
  } catch (err) {
    console.warn("[Worker] Не вдалося надіслати Telegram-сповіщення:", err);
  }
}

async function processApplyJob(job: Job, bot?: Bot) {
  if (!job.matchId) {
    throw new Error("APPLY-завдання без matchId");
  }

  const outcome = await runApplyForMatch(job.matchId, {
    previousStatus: job.previousStatus ?? undefined,
  });

  const icon = outcome.applied ? "🚀" : outcome.success ? "ℹ️" : "⚠️";
  await notifyOwner(
    bot,
    job.matchId,
    `${icon} <b>${outcome.vacancy.title}</b> (${outcome.vacancy.company})\n${outcome.message}\n\n🔗 ${outcome.vacancy.url}`
  );

  return { ok: outcome.success, result: outcome.message };
}

async function processScanJob(bot?: Bot) {
  const result: any = await orchestrator.runFullCycle({
    bot,
    triggeredBy: "Web Dashboard",
    minScore: 70,
  });

  if (result?.skipped) {
    return { ok: true, result: "Сканування вже виконується — нове не запускалось." };
  }
  return {
    ok: true,
    result: `Збір завершено: нових вакансій ${result?.newMatchesCreated ?? 0}, у Telegram ${result?.sentNotifications ?? 0}.`,
  };
}

async function processJob(job: Job, bot?: Bot) {
  console.log(`🛠️ [Worker] Виконую завдання ${job.type} (${job.id})...`);
  let outcome: { ok: boolean; result: string };

  try {
    outcome = job.type === "APPLY" ? await processApplyJob(job, bot) : await processScanJob(bot);
  } catch (err: any) {
    console.error(`❌ [Worker] Завдання ${job.id} завершилось помилкою:`, err);
    outcome = { ok: false, result: `Помилка: ${err?.message || err}` };

    // Не залишаємо картку у PENDING_APPLY, якщо щось пішло не так до pipeline
    if (job.type === "APPLY" && job.matchId) {
      await prisma.match
        .updateMany({
          where: { id: job.matchId, status: "PENDING_APPLY" },
          data: { status: job.previousStatus ?? "SENT", applyMessage: outcome.result },
        })
        .catch(() => undefined);
    }
  }

  await prisma.job.update({
    where: { id: job.id },
    data: {
      status: outcome.ok ? "DONE" : "FAILED",
      finishedAt: new Date(),
      result: outcome.result.slice(0, 1000),
    },
  });
}

/**
 * Запускає демон-обробник черги. Повертає функцію зупинки (для graceful shutdown).
 */
export async function startJobWorker(bot?: Bot) {
  await recoverInterruptedJobs();
  console.log(`🧵 [Worker] Обробник черги запущено (опитування кожні ${POLL_MS} мс).`);

  let stopped = false;
  let timer: NodeJS.Timeout | undefined;
  let currentRun: Promise<void> = Promise.resolve();

  const tick = async () => {
    if (stopped) return;
    try {
      // Обробляємо все, що накопичилось, потім засинаємо до наступного опитування
      for (;;) {
        if (stopped) break;
        const job = await claimNextJob();
        if (!job) break;
        await processJob(job, bot);
      }
    } catch (err) {
      console.error("❌ [Worker] Помилка циклу черги (наприклад, БД недоступна):", err);
    } finally {
      if (!stopped) timer = setTimeout(() => { currentRun = tick(); }, POLL_MS);
    }
  };

  currentRun = tick();

  return async () => {
    stopped = true;
    if (timer) clearTimeout(timer);
    await currentRun; // дочікуємось завершення поточного завдання
  };
}
