import { IsEnum, IsOptional, IsString } from "class-validator";
import { AuthLoginDTO } from "./auth-login.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/enums/role.enum";

export class AuthRegisterDTO extends AuthLoginDTO{
    @ApiProperty()
    @IsString()
    employeeId: string;

    @ApiProperty()
    @IsOptional()
    @IsEnum(Role)
    role:string;
}