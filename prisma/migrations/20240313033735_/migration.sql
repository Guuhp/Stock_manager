/*
  Warnings:

  - Made the column `warehouseId` on table `AddressWarehouse` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "AddressWarehouse" DROP CONSTRAINT "AddressWarehouse_warehouseId_fkey";

-- AlterTable
ALTER TABLE "AddressWarehouse" ALTER COLUMN "warehouseId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "AddressWarehouse" ADD CONSTRAINT "AddressWarehouse_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
