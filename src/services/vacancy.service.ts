import { prisma } from "../db";
import type { ScrapedVacancy } from "../scrapers/types";

export class VacancyService {
  /**
   * Зберігає або оновлює масив розпарсених вакансій у базі даних (ідемпотентно)
   */
  async saveVacancies(vacancies: ScrapedVacancy[]) {
    let savedCount = 0;

    for (const v of vacancies) {
      await prisma.vacancy.upsert({
        where: {
          source_externalId: {
            source: v.source,
            externalId: v.externalId,
          },
        },
        update: {
          title: v.title,
          company: v.company,
          description: v.description,
          url: v.url,
          location: v.location ?? null,
          salary: v.salary ?? null,
          postedAt: v.postedAt,
        },
        create: {
          source: v.source,
          externalId: v.externalId,
          title: v.title,
          company: v.company,
          description: v.description,
          url: v.url,
          location: v.location ?? null,
          salary: v.salary ?? null,
          postedAt: v.postedAt,
        },
      });
      savedCount++;
    }

    return { total: vacancies.length, saved: savedCount };
  }
}
