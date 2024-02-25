/*
  Warnings:

  - Added the required column `cnpj` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "suppliers" ADD COLUMN     "cnpj" INTEGER NOT NULL;
