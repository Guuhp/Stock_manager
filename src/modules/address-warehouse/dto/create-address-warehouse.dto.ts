import { StatusAddress } from '@prisma/client';
import { IsDefined, IsIn, IsOptional, IsString } from 'class-validator';
import { getEnumValues } from 'prisma/out/helpers';
import { Product } from 'src/modules/product/entities/product.entity';
import { Warehouse } from 'src/modules/warehouse/entities/warehouse.entity';

export class CreateAddressWarehouseDto {
  @IsDefined()
  @IsString()
  id!: string;

  @IsDefined()
  @IsString()
  address!: string;

  @IsDefined()
  @IsIn(getEnumValues(StatusAddress))
  statusAddress!: StatusAddress;

  @IsOptional()
  product?: Product;

  @IsOptional()
  @IsString()
  productId?: string;

  @IsDefined()
  Warehouse!: Warehouse;

  @IsDefined()
  @IsString()
  warehouseId!: string;
}
