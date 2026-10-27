
# OfferMagnet: правила для ШІ-агента

Проєкт: персональний агент пошуку вакансій. Next.js + TypeScript + Prisma (PostgreSQL), Gemini для оцінки, Telegram-бот, scheduler (cron), scrapers (Work.ua, Robota, DOU, Djinni, Jobico).

Ключові папки: src/ai (оцінка Gemini), src/scrapers, src/scheduler, src/services (apply.pipeline.ts, location-filter.ts, seniority-filter.ts, vacancy.service.ts), src/bot, src/app (UI).

Правила роботи:
- Працюй тільки з файлами, які я вказав або які прямо потрібні. Не читай весь проєкт.
- Спочатку коротко опиши план (до 5 рядків), потім міняй код.
- Одна задача за раз. Не рефактори і не міняй дизайн, якщо не просили.
- Відповіді короткі: що змінив, у яких файлах. Без довгих пояснень.
- Не додавай нових бібліотек без запиту.
- Після змін запускай `npm run build`.
- Доки Next.js читай з node_modules/next/dist/docs/ тільки коли міняєш роутинг, API-роути або конфіг Next, не для кожної задачі (економія токенів).