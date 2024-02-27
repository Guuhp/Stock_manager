import { IsString, IsDefined, IsOptional, IsInt, IsDate } from "class-validator";
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

    @IsOptional()
    @IsString()
    description?: string;

    @IsDefined()
    price!: number;

    @IsDefined()
    weight!: number;

    @IsDefined()
    @IsString()
    dimensions!: string;

    @IsDefined()
    @IsString()
    brand!: string;

    @IsOptional()
    @IsString()
    sku?: string;

    @IsOptional()
    @IsString()
    barCode?: string;

    @IsDefined()
    @IsInt()
    currentStockQuantity!: number;

    @IsDefined()
    @IsInt()
    minimumStockLevel!: number;

    @IsDefined()
    @IsInt()
    reorderQuantity!: number;

    @IsOptional()
    @IsString()
    imageUrl?: string;

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
