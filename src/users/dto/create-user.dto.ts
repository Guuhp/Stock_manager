import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  //@IsStrongPassword()
  @IsString()
  @MinLength(6, { message: 'Senha muito curta' })
  password: string;

  @IsString()
  employeeId: string;

}
