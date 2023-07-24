/*
  Warnings:

  - You are about to drop the `AssociateProductSupplier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AssociateUserWarehouse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AssociateProductSupplier" DROP CONSTRAINT "AssociateProductSupplier_productId_fkey";

-- DropForeignKey
ALTER TABLE "AssociateProductSupplier" DROP CONSTRAINT "AssociateProductSupplier_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "AssociateUserWarehouse" DROP CONSTRAINT "AssociateUserWarehouse_userId_fkey";

-- DropForeignKey
ALTER TABLE "AssociateUserWarehouse" DROP CONSTRAINT "AssociateUserWarehouse_warehouseId_fkey";

-- DropTable
DROP TABLE "AssociateProductSupplier";

-- DropTable
DROP TABLE "AssociateUserWarehouse";

-- CreateTable
CREATE TABLE "associate_user_wharehouse" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,

    CONSTRAINT "associate_user_wharehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "associate_product_supplier" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,

    CONSTRAINT "associate_product_supplier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "associate_user_wharehouse" ADD CONSTRAINT "associate_user_wharehouse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "associate_user_wharehouse" ADD CONSTRAINT "associate_user_wharehouse_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "associate_product_supplier" ADD CONSTRAINT "associate_product_supplier_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "associate_product_supplier" ADD CONSTRAINT "associate_product_supplier_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
