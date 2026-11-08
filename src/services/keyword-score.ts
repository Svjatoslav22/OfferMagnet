export interface ScorableVacancy {
  title?: string | null | undefined;
  description?: string | null | undefined;
  location?: string | null | undefined;
  salary?: string | null | undefined;
}

const CORE_STACK_PATTERNS: Array<{ name: string; regex: RegExp }> = [
  { name: "react", regex: /\breact(\.js|js)?\b/i },
  { name: "next.js", regex: /\bnext(\.js|js)?\b/i },
  { name: "node.js", regex: /\bnode(\.js|js)?\b/i },
  { name: "express", regex: /\bexpress(\.js|js)?\b/i },
  { name: "typescript", regex: /\btypescript\b|\bts\b/i },
  { name: "javascript", regex: /\bjavascript\b|\bjs\b/i },
  { name: "mongodb", regex: /\bmongodb\b|\bmongo\b/i },
  { name: "postgresql", regex: /\bpostgresql\b|\bpostgres\b/i },
  { name: "tailwind", regex: /\btailwind(css)?\b/i },
  { name: "prisma", regex: /\bprisma\b/i },
];

const JUNIOR_PATTERNS = [
  /\bjunior\b/i,
  /\btrainee\b/i,
  /\bintern\b/i,
  /без\s+досвіду/i,
  /no\s+experience/i,
];

const LOCATION_PATTERNS = [
  /\bremote\b/i,
  /віддален/i,
  /дистанційн/i,
  /\blviv\b/i,
  /львів/i,
  /львові/i,
];

/**
 * Обчислює базовий рейтинг вакансії (0-100) за ключовими словами без виклику ШІ.
 */
export function computeKeywordScore(
  vacancy: ScorableVacancy,
  profileKeywords: string[] = []
): number {
  const title = (vacancy.title ?? "").toLowerCase();
  const description = (vacancy.description ?? "").toLowerCase();
  const location = (vacancy.location ?? "").toLowerCase();
  const fullText = `${title} ${description}`;
  const fullWithLocation = `${fullText} ${location}`;

  // 1. Збіг стеку з описом і тайтлом — до 60 балів
  let stackScore = 0;
  const matchedStack = new Set<string>();

  for (const item of CORE_STACK_PATTERNS) {
    const inTitle = item.regex.test(title);
    const inDesc = item.regex.test(description);
    if (inTitle || inDesc) {
      matchedStack.add(item.name);
      stackScore += inTitle ? 15 : 10;
    }
  }

  for (const rawKw of profileKeywords) {
    const kw = rawKw.trim().toLowerCase();
    if (!kw || matchedStack.has(kw)) continue;
    const alreadyCovered = CORE_STACK_PATTERNS.some(
      (item) => matchedStack.has(item.name) && item.regex.test(kw)
    );
    if (alreadyCovered) continue;

    if (title.includes(kw)) {
      matchedStack.add(kw);
      stackScore += 15;
    } else if (description.includes(kw)) {
      matchedStack.add(kw);
      stackScore += 10;
    }
  }

  stackScore = Math.min(60, stackScore);

  // 2. Слова junior / trainee / intern / "без досвіду" / "no experience" — +20 балів
  const hasJuniorSignal = JUNIOR_PATTERNS.some((regex) => regex.test(fullText));
  const juniorScore = hasJuniorSignal ? 20 : 0;

  // 3. Remote або Lviv/Львів — +10 балів
  const hasLocationSignal = LOCATION_PATTERNS.some((regex) =>
    regex.test(fullWithLocation)
  );
  const locationScore = hasLocationSignal ? 10 : 0;

  // 4. Вказана зарплата — +10 балів
  const rawSalary = (vacancy.salary ?? "").trim();
  const hasSalary =
    rawSalary.length > 0 &&
    !/^(не\s+вказан[оа]|n\/a|none|-)$/i.test(rawSalary);
  const salaryScore = hasSalary ? 10 : 0;

  return Math.min(100, Math.max(0, stackScore + juniorScore + locationScore + salaryScore));
}

