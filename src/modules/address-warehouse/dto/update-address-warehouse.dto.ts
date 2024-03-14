import { PartialType } from '@nestjs/swagger';
import { CreateAddressWarehouseDto } from './create-address-warehouse.dto';

export class UpdateAddressWarehouseDto extends PartialType(CreateAddressWarehouseDto) {}
