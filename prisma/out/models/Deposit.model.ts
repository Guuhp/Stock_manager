import { IsString, IsDefined, IsInt, IsIn, IsDate } from "class-validator";
import { Warehouse, Product } from "./";
import { getEnumValues } from "../helpers";
import { StatusDeposit } from "../enums";

export class Deposit {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    @IsInt()
    initial_inventory!: number;

    @IsDefined()
    @IsInt()
    current_inventory!: number;

    @IsDefined()
    @IsString()
    warehouseId!: string;

    @IsDefined()
    warehouse!: Warehouse;

    @IsDefined()
    @IsIn(getEnumValues(StatusDeposit))
    status!: StatusDeposit;

    @IsDefined()
    @IsDate()
    created_at!: Date;

    @IsDefined()
    @IsDate()
    updated_at!: Date;

    @IsDefined()
    Product!: Product[];
}
