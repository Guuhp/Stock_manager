/*
  Warnings:

  - You are about to drop the column `depositId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `deposits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "deposits" DROP CONSTRAINT "deposits_warehouseId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_depositId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "depositId";

-- DropTable
DROP TABLE "deposits";
