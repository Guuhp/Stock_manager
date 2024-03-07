import { Module, forwardRef } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports:[PrismaModule, UsersModule, AuthModule, forwardRef(()=>ProductModule)],
  controllers: [WarehouseController],
  providers: [WarehouseService],
  exports:[WarehouseService]
})
export class WarehouseModule {}
