import { IsString } from "class-validator";
import { AuthLoginDTO } from "./auth-login.dto";

export class AuthRegisterDTO extends AuthLoginDTO{
    @IsString()
    employeeId: string;
}