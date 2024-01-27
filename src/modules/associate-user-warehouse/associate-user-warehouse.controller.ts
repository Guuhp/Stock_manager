import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { AssociateUserWarehouseService } from './associate-user-warehouse.service';
import { CreateAssociateUserWarehouseDto } from './dto/create-associate-user-warehouse.dto';
import { RoleGuard } from 'src/guards/role.guard';
import { AuthVerify } from 'src/guards/authVerify.guard';
@UseGuards(RoleGuard, AuthVerify)
@Controller('associate-user-warehouse')
export class AssociateUserWarehouseController {
  constructor(
    private readonly associateUserWarehouseService: AssociateUserWarehouseService,
  ) {}

  @Post()
  create(
    @Body() createAssociateUserWarehouseDto: CreateAssociateUserWarehouseDto,
  ) {
    return this.associateUserWarehouseService.AssociateUserWarehouse(
      createAssociateUserWarehouseDto,
    );
  }

  @Get()
  findAll() {
    return this.associateUserWarehouseService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.associateUserWarehouseService.deleteAssociateUserWarehouse(id);
  }
}
