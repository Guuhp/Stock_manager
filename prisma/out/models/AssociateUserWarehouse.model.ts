import { IsString, IsDefined } from "class-validator";
import { User, Warehouse } from "./";

export class AssociateUserWarehouse {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    user!: User;

    @IsDefined()
    @IsString()
    userId!: string;

    @IsDefined()
    warehouse!: Warehouse;

    @IsDefined()
    @IsString()
    warehouseId!: string;
}
