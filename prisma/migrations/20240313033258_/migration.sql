-- DropForeignKey
ALTER TABLE "AddressWarehouse" DROP CONSTRAINT "AddressWarehouse_productId_fkey";

-- AlterTable
ALTER TABLE "AddressWarehouse" ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "AddressWarehouse" ADD CONSTRAINT "AddressWarehouse_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
