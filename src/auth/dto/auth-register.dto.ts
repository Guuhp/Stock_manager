import { IsDefined, IsEnum, IsOptional, IsString } from 'class-validator';
import { AuthLoginDTO } from './auth-login.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/enums/role.enum';

export class AuthRegisterDTO extends AuthLoginDTO {
  @ApiProperty({ type: String })
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty({enum: Role, enumName: 'Role'})
  @IsOptional()
  @IsEnum(Role)
  role: string;

  @ApiProperty({ type: String })
  @ApiProperty()
  @IsOptional()
  department: string;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsString()
  jobTitle: string;
}
