import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsString, MinLength } from 'class-validator';

export class AuthResetDTO {
  @ApiProperty({ type: String })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ type: String })
  @IsJWT()
  token: string;
}
