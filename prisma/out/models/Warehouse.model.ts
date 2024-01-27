import { IsString, IsDefined, IsInt, IsDate } from "class-validator";
import { AssociateUserWarehouse, Deposit } from "./";

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
    deposit!: Deposit[];

    @IsDefined()
    @IsDate()
    created_at!: Date;

    @IsDefined()
    @IsDate()
    updated_at!: Date;
}
