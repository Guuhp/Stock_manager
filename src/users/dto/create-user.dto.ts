import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  //@IsStrongPassword()
  @ApiProperty()
  @IsString()
  @MinLength(6, { message: 'Senha muito curta' })
  password: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  employeeId: string;

}
