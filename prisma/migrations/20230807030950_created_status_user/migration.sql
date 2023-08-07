-- CreateEnum
CREATE TYPE "StatusAccount" AS ENUM ('ACTIVATE', 'DEACTIVATE');

-- AlterTable
ALTER TABLE "persons" ALTER COLUMN "date_birth" DROP NOT NULL;
