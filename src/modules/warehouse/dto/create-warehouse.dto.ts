import { IsNumber, IsNumberString, IsString } from "class-validator";
import { User } from "src/modules/users/entities/user.entity";

export class CreateWarehouseDto extends User{
    @IsString()
    name: string;
  
    @IsNumber()
    code: number;
  
    @IsString()
    telephone: string;
}
