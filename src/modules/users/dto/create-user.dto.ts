import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsDefined()
  name: string;
  
  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  @MinLength(6, { message: 'Senha muito curta' })
  password: string;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsString()
  department: string;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsString()
  jobTitle: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  profileImage?: string;
}
