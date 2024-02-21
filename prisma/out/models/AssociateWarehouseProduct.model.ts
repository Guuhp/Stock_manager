import { IsString, IsDefined } from "class-validator";
import { Warehouse, Product } from "./";

export class AssociateWarehouseProduct {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    warehouse!: Warehouse;

    @IsDefined()
    product!: Product;

    @IsDefined()
    @IsString()
    warehouseId!: string;

    @IsDefined()
    @IsString()
    productId!: string;
}
