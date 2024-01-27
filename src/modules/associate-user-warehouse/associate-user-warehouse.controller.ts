import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociateUserWarehouseService } from './associate-user-warehouse.service';
import { CreateAssociateUserWarehouseDto } from './dto/create-associate-user-warehouse.dto';
import { UpdateAssociateUserWarehouseDto } from './dto/update-associate-user-warehouse.dto';

@Controller('associate-user-warehouse')
export class AssociateUserWarehouseController {
  constructor(private readonly associateUserWarehouseService: AssociateUserWarehouseService) {}

  @Post()
  create(@Body() createAssociateUserWarehouseDto: CreateAssociateUserWarehouseDto) {
    return this.associateUserWarehouseService.create(createAssociateUserWarehouseDto);
  }

  @Get()
  findAll() {
    return this.associateUserWarehouseService.findAll();
  }
}
