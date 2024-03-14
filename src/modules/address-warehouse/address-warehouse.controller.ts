import { Controller, Get } from '@nestjs/common';
import { AddressWarehouseService } from './address-warehouse.service';

@Controller('address-warehouse')
export class AddressWarehouseController {
  constructor(
    private readonly addressWarehouseService: AddressWarehouseService,
  ) {}

  @Get()
  findAll() {
    return this.addressWarehouseService.findAll();
  }
}
