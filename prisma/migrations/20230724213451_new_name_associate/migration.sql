/*
  Warnings:

  - You are about to drop the `ProductSupplier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserWarehouse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductSupplier" DROP CONSTRAINT "ProductSupplier_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSupplier" DROP CONSTRAINT "ProductSupplier_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "UserWarehouse" DROP CONSTRAINT "UserWarehouse_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserWarehouse" DROP CONSTRAINT "UserWarehouse_warehouseId_fkey";

-- DropTable
DROP TABLE "ProductSupplier";

-- DropTable
DROP TABLE "UserWarehouse";

-- CreateTable
CREATE TABLE "AssociateUserWarehouse" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,

    CONSTRAINT "AssociateUserWarehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssociateProductSupplier" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,

    CONSTRAINT "AssociateProductSupplier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AssociateUserWarehouse" ADD CONSTRAINT "AssociateUserWarehouse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociateUserWarehouse" ADD CONSTRAINT "AssociateUserWarehouse_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociateProductSupplier" ADD CONSTRAINT "AssociateProductSupplier_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociateProductSupplier" ADD CONSTRAINT "AssociateProductSupplier_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
