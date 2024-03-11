-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "codProduct" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "typeInvoice" "TypeInvoice" NOT NULL,
    "warehouseId" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
