/**
 * Жорсткий фільтр рівня: відсіює вакансії не для Junior за словами в тайтлі.
 * Використовується в оркестраторі ДО збереження в БД та перед створенням Match.
 */
const SENIORITY_BLOCKLIST = ["senior", "lead", "principal", "middle", "staff"];

const SENIORITY_REGEX = new RegExp(`(?<![\\p{L}\\p{N}])(?:${SENIORITY_BLOCKLIST.join("|")})(?![\\p{L}\\p{N}])`, "iu");

/** true, якщо у тайтлі є слово Senior / Lead / Principal / Middle / Staff (цілим словом) */
export function isAboveJuniorTitle(title: string | null | undefined): boolean {
  return SENIORITY_REGEX.test(title || "");
}
