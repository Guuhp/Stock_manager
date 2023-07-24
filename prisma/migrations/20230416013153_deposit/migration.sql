/*
  Warnings:

  - Added the required column `depositId` to the `warehouses` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusDeposit" AS ENUM ('EMPTY', 'FULL', 'REPLACEMENT');

-- AlterTable
ALTER TABLE "warehouses" ADD COLUMN     "depositId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "deposits" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "initial_inventory" INTEGER NOT NULL,
    "current_inventory" INTEGER NOT NULL,
    "status" "StatusDeposit" NOT NULL DEFAULT 'EMPTY',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deposits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "warehouses" ADD CONSTRAINT "warehouses_depositId_fkey" FOREIGN KEY ("depositId") REFERENCES "deposits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
