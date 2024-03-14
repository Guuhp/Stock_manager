import { Injectable } from '@nestjs/common';
import { CreateAddressWarehouseDto } from './dto/create-address-warehouse.dto';
import { UpdateAddressWarehouseDto } from './dto/update-address-warehouse.dto';

@Injectable()
export class AddressWarehouseService {
  create(createAddressWarehouseDto: CreateAddressWarehouseDto) {
    return 'This action adds a new addressWarehouse';
  }

  findAll() {
    return `This action returns all addressWarehouse`;
  }

}
