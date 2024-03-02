import {
    IsBoolean,
    IsDefined, IsOptional,
    IsString
} from 'class-validator';
import { Supplier } from '../entities/supplier.entity';

export class CreateSupplierDto extends Supplier {
  @IsDefined()
  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsString()
  email!: string;

  @IsDefined()
  @IsString()
  telephone!: string;

  @IsDefined()
  @IsString()
  cnpj!: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean = true;
}
