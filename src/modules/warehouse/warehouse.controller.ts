import {
  Body,
  Controller, Post,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

    @Post()
    create(@Body() createWarehouseDto: CreateWarehouseDto){
      return this.warehouseService.create(createWarehouseDto)
    }
  
}
