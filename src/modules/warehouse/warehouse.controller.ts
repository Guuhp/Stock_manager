import {
  Body,
  Controller,
  Get,
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
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import { AuthVerify } from 'src/guards/authVerify.guard';

@ApiTags('warehouse')
@UseGuards(RoleGuard, AuthVerify)
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Get()
  findAll() {
    return this.warehouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehouseService.findById(id);
  }

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWarehouse: UpdateWarehouseDto) {
    return this.warehouseService.update(id, updateWarehouse);
  }
}
