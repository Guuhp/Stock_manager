import { Module } from '@nestjs/common';
import { AssociateUserWarehouseService } from './associate-user-warehouse.service';
import { AssociateUserWarehouseController } from './associate-user-warehouse.controller';

@Module({
  controllers: [AssociateUserWarehouseController],
  providers: [AssociateUserWarehouseService]
})
export class AssociateUserWarehouseModule {}
