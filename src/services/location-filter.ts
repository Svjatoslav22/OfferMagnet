/**
 * Сервіс фільтрації та парсингу локацій для SearchProfile та скраперів
 */

export interface ParsedLocationFilter {
  hasLviv: boolean;
  hasRemote: boolean;
  allowsRemote: boolean;
  targetCities: string[];
  raw?: string | undefined;
}

/**
 * Парсить рядок локації з SearchProfile (наприклад "Remote / Львів", "Lviv", "Remote")
 */
export function parseLocationFilter(locationStr?: string | null): ParsedLocationFilter {
  if (!locationStr || locationStr.trim() === "") {
    return {
      hasLviv: false,
      hasRemote: false,
      allowsRemote: true,
      targetCities: [],
      raw: locationStr ?? undefined,
    };
  }

  const normalized = locationStr.toLowerCase();
  const targetTokens = normalized
    .split(/[/,;|]+|\s+та\s+|\s+і\s+|\s+and\s+|\s+or\s+/)
    .map((t) => t.trim())
    .filter(Boolean);

  const allowsRemote = targetTokens.some((t) =>
    ["remote", "віддалено", "дистанційно", "online", "онлайн", "вся україна"].includes(t)
  );

  const targetCities = targetTokens.filter(
    (t) => !["remote", "віддалено", "дистанційно", "online", "онлайн", "вся україна"].includes(t)
  );

  const hasLviv =
    normalized.includes("lviv") ||
    normalized.includes("львів") ||
    normalized.includes("львові");

  const hasRemote =
    allowsRemote ||
    normalized.includes("remote") ||
    normalized.includes("віддален") ||
    normalized.includes("дистанційн");

  return {
    hasLviv,
    hasRemote,
    allowsRemote,
    targetCities,
    raw: locationStr,
  };
}

/**
 * Перевіряє, чи вакансія відповідає бажаній локації кандидата (Remote / Місто).
 * Відсікає офісні вакансії з Києва, Дніпра чи інших міст, якщо їх немає у профілі.
 */
export function matchesLocation(
  vacancy: {
    location?: string | null | undefined;
    title?: string | undefined;
    description?: string | undefined;
  },
  targetLocationStr?: string | null | undefined
): boolean {
  if (!targetLocationStr || targetLocationStr.trim() === "") return true;

  const { allowsRemote, targetCities } = parseLocationFilter(targetLocationStr);

  const loc = (vacancy.location || "").toLowerCase();
  const text = `${vacancy.title || ""} ${vacancy.description || ""}`.toLowerCase();

  // 1. Якщо вакансія пропонує віддалену роботу, і кандидат готовий до Remote:
  const isVacancyRemote =
    loc.includes("remote") ||
    loc.includes("віддален") ||
    loc.includes("дистанційн") ||
    loc.includes("онлайн") ||
    loc.includes("online") ||
    loc.includes("вся україна") ||
    loc.includes("будь-яке місто") ||
    text.includes("віддалена робота") ||
    text.includes("можливість працювати віддалено") ||
    text.includes("дистанційна робота") ||
    text.includes("remote work") ||
    text.includes("work from home");

  if (allowsRemote && isVacancyRemote) {
    return true;
  }

  // 2. Якщо вакансія знаходиться в одному з цільових міст кандидата:
  for (const city of targetCities) {
    if (loc.includes(city)) return true;
    if (city === "львів" && (loc.includes("lviv") || loc.includes("львові"))) return true;
    if (city === "київ" && (loc.includes("kyiv") || loc.includes("kiev") || loc.includes("києві"))) return true;
    if (city === "одеса" && (loc.includes("odesa") || loc.includes("odessa"))) return true;
    if (city === "харків" && loc.includes("kharkiv")) return true;
    if (city === "дніпро" && loc.includes("dnipro")) return true;
  }

  // 3. Якщо вакансія суто офлайн в іншому місті (Київ, Дніпро тощо) і немає Remote — відсіюємо
  return false;
}
