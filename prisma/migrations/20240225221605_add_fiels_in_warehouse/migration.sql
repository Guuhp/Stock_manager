/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `warehouses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currentInventoryValue` to the `warehouses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `warehouses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxInventoryThreshold` to the `warehouses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minInventoryThreshold` to the `warehouses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalItems` to the `warehouses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "warehouses" ADD COLUMN     "currentInventoryValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "maxInventoryThreshold" INTEGER NOT NULL,
ADD COLUMN     "minInventoryThreshold" INTEGER NOT NULL,
ADD COLUMN     "totalItems" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "warehouses_email_key" ON "warehouses"("email");
