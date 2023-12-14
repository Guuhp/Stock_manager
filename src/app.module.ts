import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PersonModule } from './modules/person/person.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { SendEmailModule } from './modules/send-email/send-email.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import { AssociateUserWarehouseModule } from './modules/associate-user-warehouse/associate-user-warehouse.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exceptions/filterException';

@Module({
  imports: [
    UsersModule,
    PersonModule,
    EmployeeModule,
    AuthModule,
    SendEmailModule,
    WarehouseModule,
    AssociateUserWarehouseModule,
  ],

  controllers: [],
  providers: [
      {
        provide: APP_FILTER,
        useClass: AllExceptionsFilter,
      }
  ],
})
export class AppModule {}
