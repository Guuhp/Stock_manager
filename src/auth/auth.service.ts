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
import { UsersService } from 'src/modules/users/users.service';
import { SendEmailService } from 'src/modules/send-email/send-email.service';
import { NotFoundException } from 'src/exceptions/expection';
import { StatusAccount } from 'src/enums/statusAccount.enum';

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
          id: user?.id,
        },
        {
          expiresIn: '30 days',
          issuer: 'API NESTJS',
          audience: 'users',
        },
      ),
    };
  }

  async validateToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        audience: 'users',
      });
      return data;
    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token has expired');
      }
      throw new BadRequestException('Invalid token');
    }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Incorrect email or password.');
    }

    if (user.statusAccount === StatusAccount.INATIVE) {
      throw new UnauthorizedException('Your account is inactive.');
    }

    //informação e eu quero comparar / a que esta em hash
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Incorrect email or password.');
    }
    return this.createToken(user);
  }

  async forget(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) throw new UnauthorizedException('incorrect email.');

    const token = {
      acessToken: await this.jwtService.sign(
        {
          //a que pertence o token
          sub: user?.id,
          email: user.email,
          id: user?.id,
        },
        {
          expiresIn: '30 minutes',
          issuer: 'API NESTJS',
          audience: 'users',
        },
      ),
    };
    console.log('TOKEN:' + token.acessToken);

    await this.email.sendEmailResetPassword(user.email, token.acessToken);
    return true;
  }

  async reset(password: string, token: string) {
    await this.prisma.$transaction(async () => {
      const user = await this.validateToken(token);

      const salt = await bcrypt.genSalt();
      password = await bcrypt.hash(password, salt);

      const user_update = await this.prisma.user.update({
        where: {
          id: user.sub,
        },
        data: {
          password,
        },
      });
      return this.createToken(user_update);
    });
  }

  async register(data: AuthRegisterDTO) {
    const user = await this.userService.create(data);
    const token = await this.createToken(user);
    //CONFIRMAÇÃO DE CONTA NO EMAIL
    const confirAccount = await this.email.sendEmailconfirmationAccount(
      user.email,
      data.email,
      (
        await token
      ).acessToken,
    );
    return confirAccount;
  }

  async confirmationAccount(token: string) {
    const user = await this.validateToken(token);
    const existsUser = await this.userService.findOne(user.id);

    if (!existsUser) throw new NotFoundException(user);

    existsUser.statusAccount = StatusAccount.ACTIVE;

    const userUpdate = await this.userService.update(existsUser.id, existsUser);
    return userUpdate;
  }
}
