/**
 * Жорсткий фільтр тайтлу: відсіює вакансії іншого рівня (Middle/Senior/Lead...)
 * та нерелевантних технологій/напрямів (QA, .NET, Java, Python, PHP, Data, DevOps...).
 * Використовується в оркестраторі ДО збереження в БД та перед створенням Match.
 * Перевірка повністю регістронезалежна, збіг лише цілим токеном (Java ≠ JavaScript).
 */
export const TITLE_BLACKLIST = [
  // Нерелевантні напрями та технології
  "QA",
  "AQA",
  "Manual",
  ".NET",
  "ASP.NET",
  "C#",
  "Java",
  "Python",
  "PHP",
  "Data",
  "DevOps",
  "Ruby",
  // Грейди
  "Middle",
  "Senior",
  "Lead",
  "Principal",
  "Staff",
];

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const BLACKLIST_REGEX = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${TITLE_BLACKLIST.map((w) => escapeRegex(w.toLowerCase())).join("|")})(?![\\p{L}\\p{N}])`,
  "iu"
);

/** true, якщо у тайтлі є слово з blacklist (будь-який регістр) */
export function isBlacklistedTitle(title: string | null | undefined): boolean {
  return BLACKLIST_REGEX.test((title || "").toLowerCase());
}

/** @deprecated Зворотна сумісність: тепер перевіряє весь blacklist, а не лише грейди */
export const isAboveJuniorTitle = isBlacklistedTitle;
