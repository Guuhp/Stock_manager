/*
  Warnings:

  - You are about to drop the column `address` on the `suppliers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "address",
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "minimum_order_quantity" TEXT;
