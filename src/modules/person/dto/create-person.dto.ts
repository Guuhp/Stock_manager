import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IsCPF } from 'class-validator-cpf';

export class CreatePersonDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  date_birth?: string;

  @ApiProperty()
  //VERIFICAR O TELEFONE
  telephone: string;

  @ApiProperty()
  @IsCPF({ message: 'CPF is format invalid' })
  cpf: string;

  @ApiProperty()
  address: string;
}
