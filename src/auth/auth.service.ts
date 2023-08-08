import { User } from './../users/entities/user.entity';
import { UsersService } from './../users/users.service';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { AuthLogin } from './dto/auth.login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken(user: User) {
    accessToken: this.jwtService.sign(
      {
        id: user.id,
        email: user.email,
      },
      {
        expiresIn: '7 days',
        subject: String(user.id),
        //quem ta emitindo o token
        issuer: 'login',
        audience: 'users',
      },
    );
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        audience: 'users',
        issuer: 'login',
      });

      return data;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async signIn(authLogin: AuthLogin) {
    const user = await this.userService.findByEmail(authLogin.email);
    if (!user) {
      throw new UnauthorizedException(
        'User Not Found, check email and password',
      );
    }
  }

  isValidToke(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }
}
