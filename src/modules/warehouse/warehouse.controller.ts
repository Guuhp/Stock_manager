import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { ApiTags } from '@nestjs/swagger';
import { RoleGuard } from 'src/guards/role.guard';

@ApiTags('warehouse')
@UseGuards(RoleGuard)
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  //@Roles(Role.ADMIN)
  @Post()
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWarehouse: UpdateWarehouseDto) {
    return this.warehouseService.update(id, updateWarehouse);
  }
}
