/*
  Warnings:

  - You are about to drop the column `employeeId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_employeeId_fkey";

-- DropIndex
DROP INDEX "users_employeeId_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "employeeId";

-- DropTable
DROP TABLE "employees";
