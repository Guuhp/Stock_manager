/*
  Warnings:

  - You are about to drop the `UserOnWarehouse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOnWarehouse" DROP CONSTRAINT "UserOnWarehouse_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnWarehouse" DROP CONSTRAINT "UserOnWarehouse_warehouseId_fkey";

-- DropTable
DROP TABLE "UserOnWarehouse";

-- CreateTable
CREATE TABLE "_UserToWarehouse" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWarehouse_AB_unique" ON "_UserToWarehouse"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWarehouse_B_index" ON "_UserToWarehouse"("B");

-- AddForeignKey
ALTER TABLE "_UserToWarehouse" ADD CONSTRAINT "_UserToWarehouse_A_fkey" FOREIGN KEY ("A") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWarehouse" ADD CONSTRAINT "_UserToWarehouse_B_fkey" FOREIGN KEY ("B") REFERENCES "warehouses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
