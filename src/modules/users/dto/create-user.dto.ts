import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto{
  @ApiProperty()
  @IsEmail()
  email: string;

  //@IsStrongPassword()
  @ApiProperty()
  @IsString()
  @MinLength(6, { message: 'Senha muito curta' })
  password: string;

}
