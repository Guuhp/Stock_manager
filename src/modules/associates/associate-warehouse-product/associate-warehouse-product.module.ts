import { Module } from '@nestjs/common';
import { AssociateWarehouseProductService } from './associate-warehouse-product.service';
import { AssociateWarehouseProductController } from './associate-warehouse-product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AssociateWarehouseProductController],
  providers: [AssociateWarehouseProductService]
})
export class AssociateWarehouseProductModule {}
