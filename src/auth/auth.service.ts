import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { UsersService } from 'src/users/users.service';
import { SendEmailService } from 'src/send-email/send-email.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
    private readonly email: SendEmailService,
  ) {}

  async createToken(user: User) {
    return {
      acessToken: await this.jwtService.sign(
        {
          //a que pertence o token
          sub: user?.id,
          email: user.email,
        },
        {
          expiresIn: '7 days',
          issuer: 'API NESTJS',
          audience: 'users',
        },
      ),
    };
  }

  async checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        audience: 'users',
      });
      console.log(data);
      return data;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        'user not found, check email and password',
      );
    }
    //informação e eu quero comparar / a que esta em hash
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException(
        'user not found, check email and password',
      );
    }
    return this.createToken(user);
  }

  async forget(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('incorrect email.');
    }
    const token = await this.createToken(user)
  
    await this.email.sendEmail(user.email, token.acessToken)
    return true;
  }

  async reset(password: string, token: string) {
    //TODO
    //VALIDAR O TOKEN
    //ATUALIZAR O PASSWORD
    //extrair o ID do token
    const id = '3e705d79-617d-44da-ac6a-247360a7f46a';
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
    return this.createToken(user);
  }

  async register(data: AuthRegisterDTO) {
    const user = await this.userService.create(data);
    return this.createToken(user);
  }
}
