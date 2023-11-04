import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class SendEmailDto {
    @ApiProperty()
    @IsString()
    to:string

    @ApiProperty()
    @IsString()
    link:string 
}
