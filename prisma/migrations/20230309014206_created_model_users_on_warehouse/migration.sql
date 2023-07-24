/*
  Warnings:

  - You are about to drop the `_UserToWarehouse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserToWarehouse" DROP CONSTRAINT "_UserToWarehouse_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToWarehouse" DROP CONSTRAINT "_UserToWarehouse_B_fkey";

-- DropTable
DROP TABLE "_UserToWarehouse";

-- CreateTable
CREATE TABLE "UserOnWarehouse" (
    "userId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,

    CONSTRAINT "UserOnWarehouse_pkey" PRIMARY KEY ("userId","warehouseId")
);

-- AddForeignKey
ALTER TABLE "UserOnWarehouse" ADD CONSTRAINT "UserOnWarehouse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnWarehouse" ADD CONSTRAINT "UserOnWarehouse_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
