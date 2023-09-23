import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PersonModule } from './person/person.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ UsersModule, PersonModule ,EmployeeModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
