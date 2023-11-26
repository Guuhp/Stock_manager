import { IsNumber, IsNumberString, IsString, Length, isPhoneNumber } from "class-validator";

export class CreateWarehouseDto {
    @IsString()
    name: string;
  
    @IsNumber()
    code: number;
  
    @IsNumberString()
    telephone: string;
}
