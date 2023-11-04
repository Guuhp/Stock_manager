import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, isString } from "class-validator";

export class AuthForgetDTO{
    @ApiProperty()
    @IsEmail()
    email:string;


}