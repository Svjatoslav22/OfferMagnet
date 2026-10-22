-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('APPLY', 'SCAN');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'RUNNING', 'DONE', 'FAILED');

-- AlterEnum
ALTER TYPE "MatchStatus" ADD VALUE 'PENDING_APPLY';

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "applyMessage" TEXT,
ADD COLUMN     "coverLetter" TEXT;

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "type" "JobType" NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "matchId" TEXT,
    "previousStatus" "MatchStatus",
    "result" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Job_status_createdAt_idx" ON "Job"("status", "createdAt");
