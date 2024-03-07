/*
  Warnings:

  - Changed the type of `ni` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "ni",
ADD COLUMN     "ni" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_ni_key" ON "products"("ni");
