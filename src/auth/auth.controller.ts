import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthResetDTO } from './dto/auth.reset.dto';
import { AuthService } from './auth.service';
import { ApiOperation, ApiParam, ApiTags, ApiBody } from '@nestjs/swagger';
import { authenticateGuard } from 'src/guards/authenticateGuard.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
@ApiTags('auth')
@UseGuards(RoleGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login de usuários' })
  @ApiBody({ type: AuthLoginDTO, required: true })
  async login(@Body() body: AuthLoginDTO) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  @ApiOperation({ summary: 'Registro de usuários' })
  @ApiBody({ type: AuthRegisterDTO, required: true })
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }

  @Post('forget')
  @ApiOperation({ summary: 'Esqueci a senha' })
  @ApiBody({ type: AuthForgetDTO, required: true })
  async forget(@Body() body: AuthForgetDTO) {
    return this.authService.forget(body.email);
  }

  @Post('reset')
  @ApiOperation({ summary: 'Redefinir a senha' })
  @ApiBody({ type: AuthResetDTO, required: true })
  async reset(@Body() body: AuthResetDTO) {
    return this.authService.reset(body.password, body.token);
  }

  @Get('confirmation/:token')
  @ApiOperation({ summary: 'Confirmação de conta' })
  @ApiParam({ name: 'token', description: 'Token JWT', required: true })
  async confirmationAccount(@Param('token') token: string) {
    return this.authService.confirmationAccount(token);
  }

  @UseGuards(authenticateGuard)
  @Roles(Role.USER)
  @Post('me')
  async me(@Req() req) {
    return {
      me: 'ok',
      data: req.tokenPayload,
      //user: user,
    };
  }
}
