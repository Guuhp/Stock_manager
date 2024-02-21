import { IsString, IsDefined, IsInt, IsDate, IsOptional } from "class-validator";
import { AssociateUserWarehouse, Product, AssociateWarehouseProduct } from "./";

export class Warehouse {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    @IsInt()
    code!: number;

    @IsDefined()
    @IsString()
    telephone!: string;

    @IsDefined()
    usersWarehouse!: AssociateUserWarehouse[];

    @IsDefined()
    @IsDate()
    created_at!: Date;

    @IsDefined()
    @IsDate()
    updated_at!: Date;

    @IsOptional()
    Product?: Product;

    @IsOptional()
    @IsString()
    productId?: string;

    @IsDefined()
    AssociateWarehouseProduct!: AssociateWarehouseProduct[];
}
