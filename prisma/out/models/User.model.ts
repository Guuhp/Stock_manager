import { IsString, IsDefined, IsOptional, IsIn, IsDate } from "class-validator";
import { AssociateUserWarehouse } from "./";
import { getEnumValues } from "../helpers";
import { Role, StatusAccount } from "../enums";

export class User {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    email!: string;

    @IsDefined()
    @IsString()
    password!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    @IsString()
    department!: string;

    @IsDefined()
    @IsString()
    jobTitle!: string;

    @IsOptional()
    @IsString()
    profileImage?: string;

    @IsDefined()
    @IsIn(getEnumValues(Role))
    role!: Role;

    @IsDefined()
    @IsIn(getEnumValues(StatusAccount))
    statusAccount!: StatusAccount;

    @IsDefined()
    warehousesUser!: AssociateUserWarehouse[];

    @IsDefined()
    @IsDate()
    created_at!: Date;

    @IsDefined()
    @IsDate()
    updated_at!: Date;
}
