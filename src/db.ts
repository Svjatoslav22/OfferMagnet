import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Рантайм працює через pooled-підключення (Neon PgBouncer, потрібно для Vercel serverless).
// Міграції йдуть через прямий DATABASE_URL (prisma.config.ts). У Prisma 7 url/directUrl
// більше не задаються в schema.prisma. Fallback на DATABASE_URL — для локальної розробки.
const connectionString = process.env.DATABASE_URL_POOLED || process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });
