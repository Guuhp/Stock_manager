import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[PrismaModule, UsersModule, AuthModule],
  controllers: [WarehouseController],
  providers: [WarehouseService],
  exports:[WarehouseService]
})
export class WarehouseModule {}
