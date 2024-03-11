-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalCost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductQuantity" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ProductQuantity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductQuantity" ADD CONSTRAINT "ProductQuantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductQuantity" ADD CONSTRAINT "ProductQuantity_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
