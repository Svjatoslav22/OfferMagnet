import { aiClient, DEFAULT_AI_MODEL } from "./ai.client";

export const CANDIDATE_PROFILE = {
  name: "Sviatoslav Tymtsiv",
  role: "Full-Stack Web Developer",
  location: "Sambir, Lviv region, Ukraine (Remote)",
  github: "https://github.com/Svjatoslav22",
  linkedin: "https://linkedin.com/in/sviatoslav-tymtciv",
  email: "svtm1234567@gmail.com",
  phone: "+380988629189",
  verifiedSkills: [
    "React",
    "Next.js (App Router, Server/Client Components)",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Supabase",
    "Neon",
    "Prisma ORM",
    "Drizzle ORM",
    "Mongoose",
    "Redux Toolkit",
    "React Router",
    "React Hook Form",
    "Zod",
    "Axios",
    "Stripe.js",
    "JWT",
    "Docker",
    "Git",
    "REST APIs",
  ],
  projects: [
    {
      name: "Slick",
      type: "Full-Stack E-Commerce Platform",
      stack: "React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, Stripe, JWT",
      highlights: "Каталог товарів, кошик, оформлення замовлення, REST API на Node.js/Express, інтеграція платежів через Stripe, JWT-автентифікація",
    },
    {
      name: "BentoBuilder",
      type: "Developer Portfolio Constructor",
      stack: "Next.js, TypeScript, Prisma ORM, PostgreSQL, Tailwind CSS",
      highlights: "Bento-grid платформа портфоліо з персоналізованим AI-асистентом, оптимізація Server/Client компонентів у Next.js, вирішення проблем гідратації",
    },
    {
      name: "SiteMonitor",
      type: "Uptime Monitoring Web App",
      stack: "React, TypeScript, Tailwind CSS, Node.js, MongoDB",
      highlights: "Моніторинг доступності сайтів у реальному часі, автоматичні ping-перевірки URL, повний CRUD, графіки аптайму та Telegram-бот для сповіщень",
    },
    {
      name: "Manifik",
      type: "Restaurant Landing Page",
      stack: "React, Node.js, Express.js, MongoDB Atlas, Tailwind CSS",
      highlights: "Адаптивний лендинг для ресторану, бекенд на Render із MongoDB Atlas (replica sets), деплой фронтенду на Vercel та налаштування CORS",
    },
  ],
};

export class CoverLetterService {
  /**
   * Генерує стислий, 100% правдивий супровідний лист (3-4 речення) під конкретну вакансію
   */
  async generateCoverLetter(vacancy: {
    title: string;
    company: string;
    description: string;
  }): Promise<string> {
    const isEnglishVacancy =
      /[a-zA-Z]{5,}/.test(vacancy.description) &&
      !/[а-яА-ЯіїєґІЇЄҐ]{10,}/.test(vacancy.description);

    const systemPrompt = `Ти — персональний кар'єрний помічник Full-Stack розробника Святослава Тимціва (Sviatoslav Tymtciv).
Твоє завдання — написати ультракороткий, влучний та 100% ПРАВДИВИЙ супровідний пітч (cover letter) для відгуку на вакансію.

🚨 НАЙГОЛОВНІШЕ ПРАВИЛО — ZERO HALLUCINATIONS (НУЛЬ БРЕХНІ):
1. ПИШИ ВИКЛЮЧНО НА ОСНОВІ РЕАЛЬНОГО СТЕКУ КАНДИДАТА:
   Стек: ${CANDIDATE_PROFILE.verifiedSkills.join(", ")}.
   Проєкти:
${CANDIDATE_PROFILE.projects.map((p) => `   - ${p.name} (${p.type}): ${p.stack}. Суть: ${p.highlights}`).join("\n")}

2. КАТЕГОРИЧНО ЗАБОРОНЕНО:
   - Вигадувати досвід з технологіями, яких НЕМАЄ в списку (наприклад: AWS, Kubernetes, GraphQL, Angular, Vue, Python, Java, C#, Go). Якщо вакансія вимагає AWS чи Docker на рівні DevOps, НЕ СТВЕРДЖУЙ, що Святослав експерт у цьому.
   - Вигадувати комерційний досвід у відомих компаніях, клієнтські проєкти або роки стажу, яких немає в описі.
   - Використовувати заїжджену воду і кліше ("Мене звуть...", "Побачив вашу чудову вакансію і не зміг пройти повз", "Я стресостійкий і комунікабельний", "Буду радий приєднатися до вашої команди професіоналів").

3. СТРУКТУРА ПІТЧУ (СТРОГО 3-4 РЕЧЕННЯ):
   - Речення 1: Привітання + прямий фокус на тому, чим реальні навички кандидата (${CANDIDATE_PROFILE.verifiedSkills.slice(0, 4).join(", ")}) підходять для цієї ролі.
   - Речення 2-3: Конкретний приклад із РЕАЛЬНОГО проєкту Святослава (${CANDIDATE_PROFILE.projects.map((p) => p.name).join(" або ")}), який найбільш релевантний до завдань вакансії (наприклад, оптимізація Next.js компонентів у BentoBuilder, Stripe-оплата у Slick або Telegram-моніторинг у SiteMonitor).
   - Речення 4: Заклик до дії (готовність показати код на GitHub / обговорити технічні деталі на дзвінку).

4. МОВА ВІДПОВІДІ:
   ${isEnglishVacancy ? "Пиши АНГЛІЙСЬКОЮ мовою (оскільки опис вакансії англомовний)." : "Пиши УКРАЇНСЬКОЮ мовою."}

Поверни ТІЛЬКИ готовий текст повідомлення, без лапок, без вступних слів і без markdown-розмітки.`;

    const userPrompt = `ВАКАНСІЯ:
Посада: ${vacancy.title}
Компанія: ${vacancy.company}
Вимоги та опис вакансії:
${vacancy.description.slice(0, 2000)}`;

    const completion = await aiClient.chat.completions.create({
      model: DEFAULT_AI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.3, // низька температура для мінімізації креативних фантазій
      max_tokens: 350,
    });

    const coverLetter = completion.choices[0]?.message?.content?.trim();
    if (!coverLetter) {
      throw new Error("Не вдалося згенерувати супровідний лист");
    }

    return coverLetter;
  }
}
