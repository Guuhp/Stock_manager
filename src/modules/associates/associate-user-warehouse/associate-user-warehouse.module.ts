import { Module } from '@nestjs/common';
import { AssociateUserWarehouseService } from './associate-user-warehouse.service';
import { AssociateUserWarehouseController } from './associate-user-warehouse.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/modules/users/users.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule],
  controllers: [AssociateUserWarehouseController],
  providers: [AssociateUserWarehouseService]
})
export class AssociateUserWarehouseModule {}
