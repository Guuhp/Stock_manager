/*
  Warnings:

  - A unique constraint covering the columns `[ni]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ni` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "ni" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_ni_key" ON "products"("ni");
