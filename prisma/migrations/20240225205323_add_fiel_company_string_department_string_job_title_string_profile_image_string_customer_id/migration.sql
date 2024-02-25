/*
  Warnings:

  - Added the required column `company` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobTitle` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImage` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "customer_id" INTEGER NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "jobTitle" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT NOT NULL;
