import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PersonModule } from './person/person.module';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [ UsersModule, PersonModule, AuthModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
