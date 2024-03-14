/*
  Warnings:

  - Made the column `quantity` on table `product_quantities` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "invoices" ALTER COLUMN "total" DROP NOT NULL;

-- AlterTable
ALTER TABLE "product_quantities" ALTER COLUMN "quantity" SET NOT NULL;
