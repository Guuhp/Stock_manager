import { IsString, IsDefined, IsDate } from "class-validator";
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
    @IsString()
    address!: string;

    @IsDefined()
    @IsDate()
    created_at!: Date;

    @IsDefined()
    @IsDate()
    updated_at!: Date;

    @IsDefined()
    ProductSupplier!: AssociateProductSupplier[];
}
