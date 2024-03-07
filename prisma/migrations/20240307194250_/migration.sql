/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_warehouseId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_invoiceId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "invoiceId",
ALTER COLUMN "ni" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Invoice";
