import { Module } from '@nestjs/common';
import { AssociateProductSupplierService } from './associate-product-supplier.service';
import { AssociateProductSupplierController } from './associate-product-supplier.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AssociateProductSupplierController],
  providers: [AssociateProductSupplierService]
})
export class AssociateProductSupplierModule {}
