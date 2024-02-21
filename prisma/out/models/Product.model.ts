import { IsString, IsDefined, IsDate } from "class-validator";
import { Warehouse, CategoryProduct, AssociateProductSupplier, AssociateWarehouseProduct } from "./";

export class Product {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    @IsString()
    unit_of_measurement!: string;

    @IsDefined()
    @IsString()
    description!: string;

    @IsDefined()
    price!: number;

    @IsDefined()
    warehouses!: Warehouse[];

    @IsDefined()
    category!: CategoryProduct;

    @IsDefined()
    @IsString()
    categoryProductId!: string;

    @IsDefined()
    ProductSupplier!: AssociateProductSupplier[];

    @IsDefined()
    @IsDate()
    created_at!: Date;

    @IsDefined()
    @IsDate()
    updated_at!: Date;

    @IsDefined()
    AssociateWarehouseProduct!: AssociateWarehouseProduct[];
}
