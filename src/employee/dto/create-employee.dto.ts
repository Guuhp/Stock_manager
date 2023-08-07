import { IsNumber, IsString } from "class-validator"

export class CreateEmployeeDto {
    @IsNumber()
    registration: number
    
    @IsString()
    office: string
    
    @IsString()
    personId: string

}
