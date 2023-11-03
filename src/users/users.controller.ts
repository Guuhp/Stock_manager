import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User') 
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

/*   @Get()
  @ApiOperation({ summary: 'get all users', description: 'Returns all users.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('findEmail/:id')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  } */


}
