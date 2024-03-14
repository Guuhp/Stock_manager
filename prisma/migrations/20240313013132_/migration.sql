/*
  Warnings:

  - You are about to drop the column `total` on the `invoices` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusAddress" AS ENUM ('AVAILABLE', 'NOTAVAILABLE');

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "total",
ADD COLUMN     "totalItens" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "AddressWarehouse" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "statusAddress" "StatusAddress" NOT NULL DEFAULT 'NOTAVAILABLE',
    "productId" TEXT NOT NULL,
    "warehouseId" TEXT,

    CONSTRAINT "AddressWarehouse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressWarehouse_address_key" ON "AddressWarehouse"("address");

-- CreateIndex
CREATE UNIQUE INDEX "AddressWarehouse_productId_key" ON "AddressWarehouse"("productId");

-- AddForeignKey
ALTER TABLE "AddressWarehouse" ADD CONSTRAINT "AddressWarehouse_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddressWarehouse" ADD CONSTRAINT "AddressWarehouse_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
