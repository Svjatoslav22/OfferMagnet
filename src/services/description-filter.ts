const WORD_END = "(?![a-zа-яіїєґ0-9])";
const WORD_START = "(?<![a-zа-яіїєґ0-9])";

const EXPERIENCE_PATTERNS: RegExp[] = [
  // "2+ years", "3+ роки", "2-3 роки", "3-5 years", "2+ років" (не матчить "0-2", "1-2", "1-3")
  new RegExp(
    `(?<![01]\\s*[-–—]\\s*|\\d)(?:[2-9]|\\d{2,})\\s*(?:\\+|\\s*[-–—]\\s*\\d+)\\s*(?:рок(?:ів|и|у)|р\\.|years?${WORD_END}|yrs?${WORD_END})`,
    "i"
  ),
  // "від 2 років", "from 2 years", "at least 2 years", "minimum 3 years", "більше 2 років", "over 2 years"
  new RegExp(
    `${WORD_START}(?:від|понад|більше|from|at\\s+least|min(?:imum)?\\.?|more\\s+than|over)\\s+(?:[2-9]|\\d{2,})\\+?\\s*(?:[-–—]\\s*\\d+\\s*)?(?:рок(?:ів|и|у)|р\\.|years?${WORD_END}|yrs?${WORD_END})`,
    "i"
  ),
  // "досвід роботи 2 роки", "досвід: 3 роки", "experience: 2 years", "experience of 3 years"
  new RegExp(
    `${WORD_START}(?:досвід(?:у|\\s+роботи)?|experience(?:\\s+of)?)\\s*(?:[:—–-]\\s*)?(?:від\\s+|from\\s+)?(?<![01]\\s*[-–—]\\s*|\\d)(?:[2-9]|\\d{2,})\\+?\\s*(?:[-–—]\\s*\\d+\\s*)?(?:рок(?:ів|и|у)|р\\.|years?${WORD_END}|yrs?${WORD_END})`,
    "i"
  ),
  // "2 роки досвіду", "3 years of experience", "2 years commercial experience"
  new RegExp(
    `(?<![01]\\s*[-–—]\\s*|\\d)(?:[2-9]|\\d{2,})\\+?\\s*(?:рок(?:ів|и|у)|р\\.|years?|yrs?)\\s+(?:of\\s+)?(?:комерційного\\s+|практичного\\s+|роботи\\s+|commercial\\s+|professional\\s+|work\\s+|hands-on\\s+)?(?:досвіду|experience)${WORD_END}`,
    "i"
  ),
];

const ENGLISH_B2_PLUS_PATTERNS: RegExp[] = [
  /\bupper[\s-]*intermediate\b/i,
  new RegExp(`${WORD_START}(?:b2|c1|c2)\\+?${WORD_END}`, "i"),
  /\badvanced\b/i,
  /\bfluent\b/i,
];

export function shouldRejectByDescription(
  description: string
): { reject: boolean; reason?: string } {
  if (!description || description.trim().length < 80) {
    return { reject: false };
  }

  for (const pattern of EXPERIENCE_PATTERNS) {
    const match = description.match(pattern);
    if (match) {
      return {
        reject: true,
        reason: `Досвід 2+ років ("${match[0].trim()}")`,
      };
    }
  }

  for (const pattern of ENGLISH_B2_PLUS_PATTERNS) {
    const match = description.match(pattern);
    if (match) {
      return {
        reject: true,
        reason: `Англійська B2+ ("${match[0].trim()}")`,
      };
    }
  }

  return { reject: false };
}
