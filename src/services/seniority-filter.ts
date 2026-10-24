/**
 * Жорсткий фільтр тайтлу: відсіює вакансії нерелевантного рівня (Middle/Senior/Lead...),
 * нетехнічних / нерелевантних спеціальностей (QA, HR, Sales, Design, Manager...),
 * а також мілітарі та невідповідних сфер (ЗСУ, НГУ, ТЦК, БПЛА тощо).
 * Використовується в оркестраторі ДО збереження в БД та перед створенням Match.
 * Перевірка повністю регістронезалежна.
 */
export const TITLE_BLACKLIST = [
  // Нерелевантні напрями та технології
  "QA",
  "AQA",
  "Manual",
  "test",
  "analyst",
  ".NET",
  "ASP.NET",
  "C#",
  "Java",
  "Python",
  "PHP",
  "Data",
  "DevOps",
  "Ruby",
  // Нетехнічні та суміжні ролі
  "copywriter",
  "writer",
  "реєстратор",
  "manager",
  "sales",
  "hr",
  "recruiter",
  "designer",
  "маркетолог",
  "support",
  "assistant",
  "admin",
  "administrator",
  "seo",
  "smm",
  // Мілітарі та державні структури
  "зсу",
  "нгу",
  "тцк",
  "бпла",
  "військ",
  "батальйон",
  "бригада",
  "медичн",
  // Грейди
  "Middle",
  "Senior",
  "Lead",
  "Principal",
  "Staff",
];

export const TECH_ROLE_KEYWORDS = [
  "developer",
  "engineer",
  "programmer",
  "fullstack",
  "frontend",
  "backend",
  "react",
  "node",
  "typescript",
  "js",
  "розробник",
  "програміст",
];

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const BLACKLIST_REGEX = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${TITLE_BLACKLIST.map((w) => escapeRegex(w.toLowerCase())).join("|")})(?![\\p{L}\\p{N}])`,
  "iu"
);

const TECH_ROLE_REGEX = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${TECH_ROLE_KEYWORDS.map((w) => escapeRegex(w.toLowerCase())).join("|")})(?![\\p{L}\\p{N}])`,
  "iu"
);

/**
 * Перевіряє, чи належить вакансія до цільових технічних IT-ролей (розробка ПЗ).
 * Повертає true, лише якщо тайтл містить хоча б одне зі слів (регістронезалежно):
 * 'developer', 'engineer', 'programmer', 'fullstack', 'frontend', 'backend',
 * 'react', 'node', 'typescript', 'js', 'розробник', 'програміст'.
 */
export function isTechRole(title: string | null | undefined): boolean {
  if (!title) return false;
  const lower = title.toLowerCase();
  if (TECH_ROLE_REGEX.test(lower)) return true;
  // Підтримка написання через дефіс: front-end, back-end, full-stack
  return (
    lower.includes("front-end") ||
    lower.includes("back-end") ||
    lower.includes("full-stack")
  );
}

/** true, якщо у тайтлі є слово з blacklist (будь-який регістр) */
export function isBlacklistedTitle(title: string | null | undefined): boolean {
  if (!title) return false;
  const lower = title.toLowerCase();
  if (BLACKLIST_REGEX.test(lower)) return true;
  // Спеціальна перевірка для коренів/основ слів (військовий, медичний тощо)
  if (lower.includes("військ") || lower.includes("медичн")) return true;
  return false;
}

/** @deprecated Зворотна сумісність: тепер перевіряє весь blacklist, а не лише грейди */
export const isAboveJuniorTitle = isBlacklistedTitle;
