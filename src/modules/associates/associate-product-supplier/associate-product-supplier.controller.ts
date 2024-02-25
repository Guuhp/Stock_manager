import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociateProductSupplierService } from './associate-product-supplier.service';
import { CreateAssociateProductSupplierDto } from './dto/create-associate-product-supplier.dto';
import { UpdateAssociateProductSupplierDto } from './dto/update-associate-product-supplier.dto';

@Controller('associate-product-supplier')
export class AssociateProductSupplierController {
  constructor(private readonly associateProductSupplierService: AssociateProductSupplierService) {}

  @Post()
  associateProductSupplier(@Body() createAssociateProductSupplierDto: CreateAssociateProductSupplierDto) {
    console.log(createAssociateProductSupplierDto);
    
    return this.associateProductSupplierService.associateProductSupplier(createAssociateProductSupplierDto);
  }

  @Delete(':id')
  removeAssociateProductSupplier(@Param('id') id: string) {
    return this.associateProductSupplierService.removeAssociateProductSupplier(id);
  }

  @Get()
  findAll() {
    return this.associateProductSupplierService.findAll();
  }

}
