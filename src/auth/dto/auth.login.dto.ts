import { IsEmail, MinLength, minLength } from "class-validator"

export class AuthLogin{
    @IsEmail()
    email:string

    @MinLength(6)
    password:string
}