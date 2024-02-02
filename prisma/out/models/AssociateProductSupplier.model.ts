import { IsString, IsDefined } from "class-validator";
import { Product, Supplier } from "./";

export class AssociateProductSupplier {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    productId!: string;

    @IsDefined()
    products!: Product;

    @IsDefined()
    @IsString()
    supplierId!: string;

    @IsDefined()
    supplier!: Supplier;
}
