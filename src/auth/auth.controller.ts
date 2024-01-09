import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthResetDTO } from './dto/auth.reset.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthVerify } from 'src/guards/authVerify.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('auth')
@UseGuards(RoleGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: AuthLoginDTO) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }

  @Post('forget')
  async forget(@Body() body: AuthForgetDTO) {
    return this.authService.forget(body.email);
  }

  @Post('reset')
  async reset(@Body() body: AuthResetDTO) {
    return this.authService.reset(body.password, body.token);
  }

  @Get('confirmation/:token')
  async confirmationAccount(@Param('token') token: string) {
    return this.authService.confirmationAccount(token);
  }

  @UseGuards(AuthVerify)
  @Roles(Role.USER)
  @Post('me')
  async me(@Req() req) {
    return {
      me: 'ok',
      data: req.tokenPayload,
      //user: user,
    };
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() res) {
    const { user } = req;

    // Aqui você pode adicionar lógica para salvar o usuário no banco de dados ou realizar outras operações

    res.redirect('http://localhost:3000/sucesso'); // Redirecione para a página desejada após a autenticação bem-sucedida
  }
}
