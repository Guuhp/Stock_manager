/*
  Warnings:

  - You are about to drop the `_ProductToWarehouse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToWarehouse" DROP CONSTRAINT "_ProductToWarehouse_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToWarehouse" DROP CONSTRAINT "_ProductToWarehouse_B_fkey";

-- AlterTable
ALTER TABLE "warehouses" ADD COLUMN     "productId" TEXT;

-- DropTable
DROP TABLE "_ProductToWarehouse";

-- CreateTable
CREATE TABLE "AssociateWarehouseProduct" (
    "id" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "AssociateWarehouseProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "warehouses" ADD CONSTRAINT "warehouses_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociateWarehouseProduct" ADD CONSTRAINT "AssociateWarehouseProduct_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociateWarehouseProduct" ADD CONSTRAINT "AssociateWarehouseProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
