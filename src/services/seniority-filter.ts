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
  "trainee",
  "intern",
  "web",
  "software",
  "full stack",
];

const FOREIGN_STACK_KEYWORDS = [
  "Angular",
  "AngularJS",
  "Vue",
  "VueJS",
  "Java",
  ".NET",
  "C#",
  "PHP",
  "Python",
  "Go",
  "Ruby",
  "Kotlin",
  "Swift",
];

const OWN_STACK_KEYWORDS = [
  "react",
  "node",
  "javascript",
  "typescript",
  "js",
  "ts",
  "fullstack",
  "full-stack",
];

const ENTRY_LEVEL_KEYWORDS = ["junior", "trainee", "intern"];

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildWordRegex = (words: string[]) =>
  new RegExp(
    `(?<![\\p{L}\\p{N}])(?:${words.map((w) => escapeRegex(w.toLowerCase())).join("|")})(?![\\p{L}\\p{N}])`,
    "iu"
  );

const BLACKLIST_REGEX = buildWordRegex(TITLE_BLACKLIST);
const TECH_ROLE_REGEX = buildWordRegex(TECH_ROLE_KEYWORDS);
const MIDDLE_REGEX = buildWordRegex(["middle"]);
const ENTRY_LEVEL_REGEX = buildWordRegex(ENTRY_LEVEL_KEYWORDS);
const FOREIGN_STACK_REGEX = buildWordRegex(FOREIGN_STACK_KEYWORDS);
const OWN_STACK_REGEX = buildWordRegex(OWN_STACK_KEYWORDS);

/**
 * Перевіряє, чи належить вакансія до цільових технічних IT-ролей (розробка ПЗ).
 * Повертає true, лише якщо тайтл містить хоча б одне з ключових слів TECH_ROLE_KEYWORDS.
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

/** true, якщо у тайтлі є Middle без junior / trainee / intern */
export function isMiddleOnlyTitle(title: string): boolean {
  return MIDDLE_REGEX.test(title) && !ENTRY_LEVEL_REGEX.test(title);
}

const FOREIGN_JS_SUFFIX_REGEX = /\b(?:angular|vue)\.?js\b/gi;

/** true, якщо у тайтлі є чужий стек і немає жодного маркера власного стеку */
export function isForeignStackTitle(title: string): boolean {
  if (!FOREIGN_STACK_REGEX.test(title)) return false;
  const cleanedTitle = title.replace(FOREIGN_JS_SUFFIX_REGEX, "");
  return !OWN_STACK_REGEX.test(cleanedTitle);
}

/** true, якщо у тайтлі є слово з blacklist, нерелевантний Middle або чужий стек (будь-який регістр) */
export function isBlacklistedTitle(title: string | null | undefined): boolean {
  if (!title) return false;
  const lower = title.toLowerCase();
  if (BLACKLIST_REGEX.test(lower)) return true;
  // Спеціальна перевірка для коренів/основ слів (військовий, медичний тощо)
  if (lower.includes("військ") || lower.includes("медичн")) return true;
  if (isMiddleOnlyTitle(lower)) return true;
  if (isForeignStackTitle(lower)) return true;
  return false;
}

const MILITARY_UNIT_REGEX =
  /(?<![\p{L}\p{N}])(?:зсу|нгу|тцк|бпла|гур|дпсу)(?![\p{L}\p{N}])|військ|батальйон|бригад|безпілотн|прикордонн|сил\p{L}*\s+оборон|бойов\p{L}*\s+ді|місц\p{L}*\s+служб/iu;

/** true, якщо назва компанії або текст вакансії містить маркери військової служби (ЗСУ, НГУ, бригади тощо) */
export function isMilitaryText(text: string | null | undefined): boolean {
  if (!text) return false;
  return MILITARY_UNIT_REGEX.test(text);
}

/** @deprecated Зворотна сумісність: тепер перевіряє весь blacklist, а не лише грейди */
export const isAboveJuniorTitle = isBlacklistedTitle;
