import { aiClient, DEFAULT_AI_MODEL } from "./ai.client.js";
import { prisma } from "../db.js";
import type { SearchProfile, Vacancy } from "@prisma/client";

export interface MatchAnalysisResult {
  score: number;
  reason: string;
  matchedSkills: string[];
  missingSkills: string[];
}

export class MatcherService {
  /**
   * Оцінює вакансію відносно профілю пошуку за допомогою LLM
   */
  async evaluateVacancy(
    profile: SearchProfile,
    vacancy: Vacancy
  ): Promise<MatchAnalysisResult> {
    const systemPrompt = `Ти — експертний AI IT-рекрутер та кар'єрний аналітик.
Твоє завдання — об'єктивно оцінити відповідність вакансії до профілю кандидата за шкалою від 0 до 100 балів.

Критерії оцінювання:
1. Стек технологій (40% ваги): чи збігаються основні технології кандидата з вимогами.
2. Рівень сеньйорності (30% ваги): якщо кандидат Junior, а шукають Senior/Lead/Architect — бал не повинен перевищувати 35.
3. Формат / Локація (20% ваги): відповідність Remote / On-site / Місто.
4. Зарплатні очікування (10% ваги): якщо вказано вилку.

Відповідь НАДАЙ СТРОГО у валідному JSON без markdown форматування:
{
  "score": <число від 0 до 100>,
  "reason": "<короткий чіткий висновок українською мовою на 1-2 речення>",
  "matchedSkills": ["навички кандидата, які точно потрібні у вакансії"],
  "missingSkills": ["ключові вимоги з вакансії, яких кандидат не вказав"]
}`;

    const userPrompt = `ПРОФІЛЬ КАНДИДАТА:
- Рівень: ${profile.level}
- Ключові навички: ${profile.keywords.join(", ")}
- Бажана локація: ${profile.location}
- Зарплатні очікування: $${profile.minSalary ?? 0} - $${profile.maxSalary ?? "не вказано"}

ВАКАНСІЯ:
- Позиція: ${vacancy.title}
- Компанія: ${vacancy.company}
- Джерело: ${vacancy.source}
- Опис: ${vacancy.description}`;

    const completion = await aiClient.chat.completions.create({
      model: DEFAULT_AI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error("[MatcherService] Порожня відповідь від AI моделі");
    }

    try {
      const parsed = JSON.parse(content) as MatchAnalysisResult;
      return {
        score: Math.max(0, Math.min(100, Math.round(parsed.score || 0))),
        reason: parsed.reason || "Оцінено ШІ",
        matchedSkills: Array.isArray(parsed.matchedSkills) ? parsed.matchedSkills : [],
        missingSkills: Array.isArray(parsed.missingSkills) ? parsed.missingSkills : [],
      };
    } catch (parseError) {
      console.error("[MatcherService] Помилка парсингу JSON:", content);
      throw parseError;
    }
  }

  /**
   * Оцінює вакансію та зберігає/оновлює результат у таблиці Match
   */
  async matchAndSave(
    userId: string,
    profile: SearchProfile,
    vacancy: Vacancy
  ) {
    const analysis = await this.evaluateVacancy(profile, vacancy);

    const match = await prisma.match.upsert({
      where: {
        userId_vacancyId: {
          userId,
          vacancyId: vacancy.id,
        },
      },
      update: {
        score: analysis.score,
        reason: analysis.reason,
        matchedSkills: analysis.matchedSkills,
        missingSkills: analysis.missingSkills,
      },
      create: {
        userId,
        vacancyId: vacancy.id,
        score: analysis.score,
        reason: analysis.reason,
        matchedSkills: analysis.matchedSkills,
        missingSkills: analysis.missingSkills,
      },
    });

    return { match, analysis };
  }
}
