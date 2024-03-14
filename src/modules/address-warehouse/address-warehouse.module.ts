import { Module } from '@nestjs/common';
import { AddressWarehouseService } from './address-warehouse.service';
import { AddressWarehouseController } from './address-warehouse.controller';

@Module({
  controllers: [AddressWarehouseController],
  providers: [AddressWarehouseService]
})
export class AddressWarehouseModule {}
