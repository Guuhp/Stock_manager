import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { authenticateGuard } from 'src/guards/authenticateGuard.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
@UseGuards(RoleGuard, authenticateGuard)
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('change_role/:id')
  @Roles(Role.ADMIN)
  changeUserRole(@Param('id') id: string, @Body('role') newRole: Role) {
    return this.usersService.changeUserRole(id, newRole);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
