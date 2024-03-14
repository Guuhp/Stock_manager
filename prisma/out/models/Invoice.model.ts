import { IsString, IsDefined, IsOptional, IsIn, IsDate } from "class-validator";
import { ProductQuantity } from "./";
import { getEnumValues } from "../helpers";
import { TypeInvoice } from "../enums";

export class Invoice {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    products!: ProductQuantity[];

    @IsOptional()
    totalItens?: number;

    @IsDefined()
    @IsIn(getEnumValues(TypeInvoice))
    type!: TypeInvoice;

    @IsDefined()
    @IsDate()
    created_at!: Date;

    @IsDefined()
    @IsDate()
    updated_at!: Date;
}
