/*
  Warnings:

  - Added the required column `currentStockQuantity` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensions` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minimumStockLevel` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reorderQuantity` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "currentStockQuantity" INTEGER NOT NULL,
ADD COLUMN     "dimensions" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "minimumStockLevel" INTEGER NOT NULL,
ADD COLUMN     "reorderQuantity" INTEGER NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;
