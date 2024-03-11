import { IsString, IsDefined, IsInt, IsOptional } from "class-validator";
import { Product, Invoice } from "./";

export class ProductQuantity {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    product!: Product;

    @IsDefined()
    @IsString()
    productId!: string;

    @IsDefined()
    @IsInt()
    quantity!: number;

    @IsOptional()
    Invoice?: Invoice;

    @IsOptional()
    @IsString()
    invoiceId?: string;
}
