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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associateUserWarehouseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociateUserWarehouseDto: UpdateAssociateUserWarehouseDto) {
    return this.associateUserWarehouseService.update(+id, updateAssociateUserWarehouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associateUserWarehouseService.remove(+id);
  }
}
