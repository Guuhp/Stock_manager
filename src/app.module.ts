import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [ UsersModule, PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
