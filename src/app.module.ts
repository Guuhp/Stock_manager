import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { SendEmailModule } from './modules/send-email/send-email.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import { AssociateUserWarehouseModule } from './modules/associate-user-warehouse/associate-user-warehouse.module';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsFilterGlobal } from './exceptions/exceptionsFilterGlobal';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    SendEmailModule,
    WarehouseModule,
    AssociateUserWarehouseModule,
    ProductModule,
    
  ],

  controllers: [],
  providers: [
      {
        provide: APP_FILTER,
        useClass: ExceptionsFilterGlobal,
      }
  ],
})
export class AppModule {}
