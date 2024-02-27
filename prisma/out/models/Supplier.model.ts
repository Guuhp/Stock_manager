import { IsString, IsDefined, IsInt, IsOptional, IsBoolean, IsDate } from "class-validator";
import { AssociateProductSupplier } from "./";

export class Supplier {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    @IsString()
    email!: string;

    @IsDefined()
    @IsString()
    telephone!: string;

    @IsDefined()
    @IsInt()
    cnpj!: number;

    @IsOptional()
    @IsString()
    minimum_order_quantity?: string;

    @IsDefined()
    @IsBoolean()
    is_active!: boolean;

    @IsDefined()
    @IsDate()
    created_at!: Date;

    @IsDefined()
    @IsDate()
    updated_at!: Date;

    @IsDefined()
    ProductSupplier!: AssociateProductSupplier[];
}
