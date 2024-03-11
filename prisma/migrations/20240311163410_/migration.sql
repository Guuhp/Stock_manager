/*
  Warnings:

  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InvoiceItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_warehouseId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceItem" DROP CONSTRAINT "InvoiceItem_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceItem" DROP CONSTRAINT "InvoiceItem_productId_fkey";

-- DropTable
DROP TABLE "Invoice";

-- DropTable
DROP TABLE "InvoiceItem";
