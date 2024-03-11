/*
  Warnings:

  - The values [NULL] on the enum `TypeInvoice` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypeInvoice_new" AS ENUM ('INPUT', 'OUTPUT');
ALTER TABLE "Invoice" ALTER COLUMN "typeInvoice" TYPE "TypeInvoice_new" USING ("typeInvoice"::text::"TypeInvoice_new");
ALTER TYPE "TypeInvoice" RENAME TO "TypeInvoice_old";
ALTER TYPE "TypeInvoice_new" RENAME TO "TypeInvoice";
DROP TYPE "TypeInvoice_old";
COMMIT;
