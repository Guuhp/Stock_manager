import { IsNumber, IsNumberString, IsString} from "class-validator";

export class CreateWarehouseDto {
    @IsString()
    name: string;
  
    @IsNumber()
    code: number;
  
    @IsNumberString()
    telephone: string;
}
