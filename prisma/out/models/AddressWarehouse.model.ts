import { IsString, IsDefined, IsIn, IsOptional } from "class-validator";
import { Product, Warehouse } from "./";
import { getEnumValues } from "../helpers";
import { StatusAddress } from "../enums";

export class AddressWarehouse {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    address!: string;

    @IsDefined()
    @IsIn(getEnumValues(StatusAddress))
    statusAddress!: StatusAddress;

    @IsOptional()
    product?: Product;

    @IsOptional()
    @IsString()
    productId?: string;

    @IsDefined()
    Warehouse!: Warehouse;

    @IsDefined()
    @IsString()
    warehouseId!: string;
}
