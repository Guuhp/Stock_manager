import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { authenticateGuard } from 'src/guards/authenticateGuard.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
import {
  ApiBody,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('User')
@UseGuards(RoleGuard, authenticateGuard)
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiOkResponse({ description: 'Retorna a lista de usuários' })
  findAll() {
    return this.usersService.findAll();
  }

  @Post('change_role/:id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Alterar a função de um usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  @ApiBody({
    required: true,
    description: 'Nova função do usuário',
    enum: Role,
  })
  @ApiOkResponse({ description: 'Usuário atualizado com sucesso' })
  changeUserRole(@Param('id') id: string, @Body('role') newRole: Role) {
    return this.usersService.changeUserRole(id, newRole);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Deletar um usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  @ApiNoContentResponse({ description: 'Usuário deletado com sucesso' })
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() userUpdate: UpdateUserDto){
    return this.usersService.update(id, userUpdate); 
  }
}
