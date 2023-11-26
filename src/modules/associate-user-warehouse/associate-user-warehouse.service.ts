import { Injectable } from '@nestjs/common';
import { CreateAssociateUserWarehouseDto } from './dto/create-associate-user-warehouse.dto';
import { UpdateAssociateUserWarehouseDto } from './dto/update-associate-user-warehouse.dto';

@Injectable()
export class AssociateUserWarehouseService {
  create(createAssociateUserWarehouseDto: CreateAssociateUserWarehouseDto) {
    return 'This action adds a new associateUserWarehouse';
  }

  findAll() {
    return `This action returns all associateUserWarehouse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associateUserWarehouse`;
  }

  update(id: number, updateAssociateUserWarehouseDto: UpdateAssociateUserWarehouseDto) {
    return `This action updates a #${id} associateUserWarehouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} associateUserWarehouse`;
  }
}
