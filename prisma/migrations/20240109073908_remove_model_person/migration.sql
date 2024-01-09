/*
  Warnings:

  - You are about to drop the column `personId` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the `persons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_personId_fkey";

-- DropIndex
DROP INDEX "employees_personId_key";

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "personId";

-- DropTable
DROP TABLE "persons";
