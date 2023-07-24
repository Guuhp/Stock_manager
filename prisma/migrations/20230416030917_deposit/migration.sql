/*
  Warnings:

  - You are about to drop the column `depositId` on the `warehouses` table. All the data in the column will be lost.
  - Added the required column `warehouseId` to the `deposits` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "warehouses" DROP CONSTRAINT "warehouses_depositId_fkey";

-- AlterTable
ALTER TABLE "deposits" ADD COLUMN     "warehouseId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "warehouses" DROP COLUMN "depositId";

-- AddForeignKey
ALTER TABLE "deposits" ADD CONSTRAINT "deposits_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
