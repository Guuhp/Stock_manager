import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateEmployeeDto {
    @ApiProperty()
    @IsNumber()
    registration: number
    
    @ApiProperty()
    @IsString()
    office: string
    
    @ApiProperty()
    @IsString()
    personId: string

}
