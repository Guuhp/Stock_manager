import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WarehouseModule } from '../warehouse/warehouse.module';

@Module({
  imports: [PrismaModule, WarehouseModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
