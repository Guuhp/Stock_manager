import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import {
  CustomHttpException,
  InternalErrorException,
  NotFoundException,
} from 'src/exceptions/expection';
import { Role } from 'src/enums/role.enum';
import { StatusAccount } from 'src/enums/statusAccount.enum';
import { UpdateUserDto } from './dto/update-user.dto';

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

    throw new ConflictException('E-mail already registered');
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      include: {
        warehousesUser: true,
      },
    });
    if (users.length === 0) {
      throw new CustomHttpException(404, 'Users not found');
      // HTTP 404 Not Found: Indicates that the requested resource could not be found on the server.
    }
    return users;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('user');
    }
    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const existsUser = await this.prisma.user.findFirst({ where: { id } });

    if (!existsUser) throw new NotFoundException('user');

    const userUpdate = await this.prisma.user.update({
      where: { id },
      data,
    });
    return userUpdate;
  }

  async changeUserRole(userId: string, newRole: Role) {
    const user = await this.prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    if (user.role === newRole) {
      throw new BadRequestException('Permission already assigned');
    }

    if (!Object.values(Role).includes(newRole)) {
      throw new BadRequestException(`Invalid role: ${newRole}`);
    }

    try {
      const userUpdate = await this.prisma.user.update({
        where: { id: user.id },
        data: { role: newRole },
      });

      return userUpdate;
    } catch (error) {
      // Handle any potential database update errors
      throw new InternalErrorException('Failed to update user role');
    }
  }

  async delete(id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    if (!user) throw new NotFoundException('user');

    if (user.statusAccount == StatusAccount.INATIVE)
      throw new NotFoundException('user');

    await this.prisma.$transaction([
      this.prisma.user.updateMany({
        where: {
          id: user.id,
        },
        data: {
          statusAccount: StatusAccount.INATIVE,
        },
      }),
    ]);

    return { status: 200, message: 'User deleted successfully' };
  }
}
