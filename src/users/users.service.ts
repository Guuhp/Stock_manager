import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CustomHttpException } from 'src/exceptions/expection';
import { log } from 'console';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
  
    if (!existingUser) {
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
  
      return await this.prisma.user.create({
        data,
      });
    }
  
    throw new ConflictException("E-mail already registered");
  }
  

  async findAll() {
    const users = await this.prisma.user.findMany();
    if (users.length === 0) {
      throw new CustomHttpException(404, 'Users not found');
      // HTTP 404 Not Found: Indicates that the requested resource could not be found on the server.
    }

    return users;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new CustomHttpException(404, 'User not found');
      // HTTP 404 Not Found: Indicates that the requested resource could not be found on the server.
    }

    return user;
  }
}
