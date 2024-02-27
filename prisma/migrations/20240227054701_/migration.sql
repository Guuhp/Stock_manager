/*
  Warnings:

  - You are about to drop the column `description` on the `category_products` table. All the data in the column will be lost.
  - Added the required column `slug` to the `category_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category_products" DROP COLUMN "description",
ADD COLUMN     "slug" TEXT NOT NULL;
