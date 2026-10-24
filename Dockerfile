# Dockerfile для автономного Telegram-бота та CRON-оркестратора з підтримкою Chromium для Playwright
FROM node:22-slim

# Встановлюємо Chromium та системні залежності для обходу Cloudflare
RUN apt-get update && apt-get install -y \
    chromium \
    dumb-init \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
    fonts-thai-tlwg \
    fonts-kacst \
    fonts-freefont-ttf \
    libxss1 \
    libnss3 \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Вказуємо шлях до системного бінарника Chromium
ENV CHROMIUM_PATH=/usr/bin/chromium
ENV NODE_ENV=production

WORKDIR /app

# Копіюємо конфіги залежностей
COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

# Встановлюємо залежності та генеруємо Prisma Client
RUN npm ci --include=dev
RUN npx prisma generate

# Копіюємо вихідний код
COPY tsconfig.json ./
COPY src ./src

# CV та cookies живуть на Railway Volume (mount path: /data) і НЕ вшиваються в образ.
# Завантажуються через Telegram-бота (PDF / JSON) — див. bot.on("message:document").
ENV COOKIES_DIR=/data/cookies
ENV CV_PATH=/data/Sviatoslav_Tumtciv_CV.pdf
ENV ARTIFACTS_DIR=/data/artifacts/applies

# Коректна маршрутизація сигналів SIGINT/SIGTERM для безпечного завершення процесів
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

# Запуск бота та планувальника CRON
CMD ["npm", "run", "bot:prod"]
