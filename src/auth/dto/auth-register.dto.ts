import { IsString } from "class-validator";
import { AuthLoginDTO } from "./auth-login.dto";
import { ApiProperty } from "@nestjs/swagger";

export class AuthRegisterDTO extends AuthLoginDTO{
    @ApiProperty()
    @IsString()
    employeeId: string;
}