import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { SendEmailModule } from './modules/send-email/send-email.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsFilterGlobal } from './exceptions/exceptionsFilterGlobal';
import { ProductModule } from './modules/product/product.module';
import { AssociateUserWarehouseModule } from './modules/associates/associate-user-warehouse/associate-user-warehouse.module';
import { AssociateWarehouseProductModule } from './modules/associates/associate-warehouse-product/associate-warehouse-product.module';
import { CategoryProductModule } from './modules/category-product/category-product.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    SendEmailModule,
    WarehouseModule,
    AssociateUserWarehouseModule,
    ProductModule,
    AssociateWarehouseProductModule,
    CategoryProductModule,
    
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
