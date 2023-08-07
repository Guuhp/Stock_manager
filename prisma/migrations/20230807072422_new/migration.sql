/*
  Warnings:

  - The values [ACTIVATE,DEACTIVATE] on the enum `StatusAccount` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StatusAccount_new" AS ENUM ('ACTIVE', 'INATIVE');
ALTER TABLE "users" ALTER COLUMN "statusAccount" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "statusAccount" TYPE "StatusAccount_new" USING ("statusAccount"::text::"StatusAccount_new");
ALTER TYPE "StatusAccount" RENAME TO "StatusAccount_old";
ALTER TYPE "StatusAccount_new" RENAME TO "StatusAccount";
DROP TYPE "StatusAccount_old";
ALTER TABLE "users" ALTER COLUMN "statusAccount" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "statusAccount" SET DEFAULT 'ACTIVE';
