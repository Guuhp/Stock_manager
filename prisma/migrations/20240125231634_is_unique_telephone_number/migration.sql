/*
  Warnings:

  - A unique constraint covering the columns `[telephone]` on the table `warehouses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "warehouses_telephone_key" ON "warehouses"("telephone");
