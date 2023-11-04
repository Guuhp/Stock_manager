import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PersonModule } from './person/person.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { SendEmailModule } from './send-email/send-email.module';

@Module({
  imports: [
    UsersModule,
    PersonModule,
    EmployeeModule,
    AuthModule,
    SendEmailModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
