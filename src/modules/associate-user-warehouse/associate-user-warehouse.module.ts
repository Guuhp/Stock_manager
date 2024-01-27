import { Module } from '@nestjs/common';
import { AssociateUserWarehouseService } from './associate-user-warehouse.service';
import { AssociateUserWarehouseController } from './associate-user-warehouse.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AssociateUserWarehouseController],
  providers: [AssociateUserWarehouseService]
})
export class AssociateUserWarehouseModule {}
