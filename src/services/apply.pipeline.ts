import { prisma } from "../db";
import { CoverLetterService } from "../ai/cover-letter.service";
import { playwrightApplyService } from "./playwright-apply.service";
import type { MatchStatus } from "@prisma/client";

export interface ApplyOutcome {
  /** Чи завершилась операція без помилки (зовнішній ATS / потрібна авторизація = false/true відповідно до результату) */
  success: boolean;
  /** Чи відгук реально відправлено (тоді статус матчу = APPLIED) */
  applied: boolean;
  message: string;
  coverLetter?: string;
  screenshotPath?: string;
  vacancy: { title: string; company: string; source: string; url: string };
}

// Усі відгуки виконуються строго по черзі в межах процесу: один Chromium за раз,
// без ризику подвійної відправки на ту саму вакансію.
let chain: Promise<unknown> = Promise.resolve();
function serialize<T>(fn: () => Promise<T>): Promise<T> {
  const run = chain.then(fn, fn);
  chain = run.catch(() => undefined);
  return run;
}

export function runApplyForMatch(
  matchId: string,
  options: { previousStatus?: MatchStatus | undefined; dryRun?: boolean } = {}
): Promise<ApplyOutcome> {
  return serialize(() => doApply(matchId, options));
}

async function doApply(
  matchId: string,
  options: { previousStatus?: MatchStatus | undefined; dryRun?: boolean }
): Promise<ApplyOutcome> {
  const { dryRun = false } = options;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: { vacancy: true },
  });
  if (!match) {
    throw new Error("Матч не знайдено в базі");
  }

  const vacancyInfo = {
    title: match.vacancy.title,
    company: match.vacancy.company,
    source: match.vacancy.source,
    url: match.vacancy.url,
  };

  // Ідемпотентність: повторний клік не відправляє відгук вдруге
  if (match.status === "APPLIED" && !dryRun) {
    return {
      success: true,
      applied: true,
      message: "Відгук на цю вакансію вже було відправлено раніше.",
      ...(match.coverLetter ? { coverLetter: match.coverLetter } : {}),
      vacancy: vacancyInfo,
    };
  }

  // Статус, до якого повертаємось, якщо відгук не вдався
  const fallbackStatus: MatchStatus =
    options.previousStatus ?? (match.status === "PENDING_APPLY" ? "SENT" : match.status);

  try {
    // Чесний пітч: використовуємо вже згенерований, інакше створюємо новий
    let coverLetter = match.coverLetter;
    if (!coverLetter) {
      coverLetter = await new CoverLetterService().generateCoverLetter({
        title: match.vacancy.title,
        company: match.vacancy.company,
        description: match.vacancy.description,
      });
      await prisma.match.update({ where: { id: matchId }, data: { coverLetter } });
    }

    const result = await playwrightApplyService.applyToVacancy(match.vacancy, coverLetter, { dryRun });

    // APPLIED лише якщо форму реально відправлено (не dry-run, не зовнішній ATS, не помилка авторизації)
    const applied = result.success && !result.isExternal && !dryRun;
    const message = result.isExternal
      ? `${result.message}${result.externalUrl ? ` Посилання: ${result.externalUrl}` : ""}`
      : result.message;

    await prisma.match.update({
      where: { id: matchId },
      data: {
        status: applied ? "APPLIED" : fallbackStatus,
        applyMessage: message,
      },
    });

    return {
      success: result.success,
      applied,
      message,
      coverLetter,
      ...(result.screenshotPath ? { screenshotPath: result.screenshotPath } : {}),
      vacancy: vacancyInfo,
    };
  } catch (error: any) {
    const message = `Помилка авто-відгуку: ${error?.message || error}`;
    await prisma.match
      .update({
        where: { id: matchId },
        data: { status: fallbackStatus, applyMessage: message },
      })
      .catch(() => undefined);

    return { success: false, applied: false, message, vacancy: vacancyInfo };
  }
}
