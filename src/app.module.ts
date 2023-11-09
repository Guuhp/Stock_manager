import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PersonModule } from './modules/person/person.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { SendEmailModule } from './modules/send-email/send-email.module';

@Module({
  imports: [
    UsersModule,
    PersonModule,
    EmployeeModule,
    AuthModule,
    SendEmailModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
