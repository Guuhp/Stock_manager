import { IsString, IsDefined, IsIn, IsDate } from "class-validator";
import { ProductQuantity } from "./";
import { getEnumValues } from "../helpers";
import { TypeInvoice } from "../enums";

export class Invoice {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    userId!: string;

    @IsDefined()
    products!: ProductQuantity[];

    @IsDefined()
    total!: number;

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
