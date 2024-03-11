/*
  Warnings:

  - You are about to drop the `ProductQuantity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductQuantity" DROP CONSTRAINT "ProductQuantity_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "ProductQuantity" DROP CONSTRAINT "ProductQuantity_productId_fkey";

-- DropTable
DROP TABLE "ProductQuantity";

-- DropTable
DROP TABLE "invoices";
