export type SalaryCurrency = "UAH" | "USD" | "EUR";

export interface SalaryUsd {
  min: number | null;
  max: number | null;
}

const DEFAULT_USD_UAH_RATE = 41;

export function getUsdUahRate(): number {
  const raw = typeof process !== "undefined" ? process.env?.USD_UAH_RATE : undefined;
  const rate = Number(raw);
  return Number.isFinite(rate) && rate > 0 ? rate : DEFAULT_USD_UAH_RATE;
}

/**
 * Переводить зарплатну вилку в долари. Підтримує UAH і USD, інші валюти (EUR) → null.
 */
export function normalizeSalaryToUsd(
  min: number | null | undefined,
  max: number | null | undefined,
  currency: SalaryCurrency,
  rate: number = getUsdUahRate()
): SalaryUsd | null {
  const convert = (v: number | null | undefined): number | null => {
    if (v == null || !Number.isFinite(v)) return null;
    if (currency === "USD") return Math.round(v);
    if (currency === "UAH") return Math.round(v / rate);
    return null;
  };
  if (currency !== "USD" && currency !== "UAH") return null;
  const result = { min: convert(min), max: convert(max) };
  return result.min == null && result.max == null ? null : result;
}

/**
 * Розбирає рядок зарплати зі скрапера ("10 000 – 15 000 грн", "$3000-5000").
 */
export function parseSalaryString(
  salary: string | null | undefined
): { min: number | null; max: number | null; currency: SalaryCurrency } | null {
  if (!salary) return null;
  const text = salary.toLowerCase();

  let currency: SalaryCurrency | null = null;
  if (/грн|₴|uah/.test(text)) currency = "UAH";
  else if (/\$|usd|дол/.test(text)) currency = "USD";
  else if (/€|eur|євро/.test(text)) currency = "EUR";
  if (!currency) return null;

  const nums = (text.match(/\d[\d\s\u00a0\u202f]*(?:[.,]\d+)?/g) ?? [])
    .map((n) => Number(n.replace(/[\s\u00a0\u202f]/g, "").replace(",", ".")))
    .filter((n) => Number.isFinite(n) && n > 0);
  if (nums.length === 0) return null;

  const min = nums[0] ?? null;
  const max = nums.length > 1 ? nums[1]! : null;
  return { min, max, currency };
}

/** Зарплата вакансії в $ (або null, якщо невідома / непідтримувана валюта). */
export function getVacancySalaryUsd(
  salary: string | null | undefined,
  rate?: number
): SalaryUsd | null {
  const parsed = parseSalaryString(salary);
  if (!parsed) return null;
  return normalizeSalaryToUsd(parsed.min, parsed.max, parsed.currency, rate);
}

export function formatUsdRange(usd: SalaryUsd): string {
  const { min, max } = usd;
  if (min != null && max != null && min !== max) return `~$${min}–${max}`;
  return `~$${min ?? max}`;
}

/** "10 000 – 15 000 грн (~$244–366)"; для USD або невідомого формату повертає оригінал. */
export function formatSalaryWithUsd(
  salary: string | null | undefined,
  rate?: number
): string {
  if (!salary) return "";
  const parsed = parseSalaryString(salary);
  if (!parsed || parsed.currency !== "UAH") return salary;
  const usd = normalizeSalaryToUsd(parsed.min, parsed.max, parsed.currency, rate);
  return usd ? `${salary} (${formatUsdRange(usd)})` : salary;
}

