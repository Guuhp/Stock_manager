import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AssociateWarehouseProductService } from './associate-warehouse-product.service';
import { CreateAssociateWarehouseProductDto } from './dto/create-associate-warehouse-product.dto';

@Controller('associate-warehouse-product')
export class AssociateWarehouseProductController {
  constructor(
    private readonly associateWarehouseProductService: AssociateWarehouseProductService,
  ) {}

  @Get()
  findAll() {
    return this.associateWarehouseProductService.findAll();
  }

  @Post()
  create(
    @Body()
    createAssociateWarehouseProductDto: CreateAssociateWarehouseProductDto,
  ) {
    return this.associateWarehouseProductService.AssociateWarehouseProduct(
      createAssociateWarehouseProductDto,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.associateWarehouseProductService.removeAssociateWarehouseProduct(id);
  }
}
