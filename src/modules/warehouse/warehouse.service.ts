import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import {
  CustomHttpException,
  NotFoundException,
} from 'src/exceptions/expection';

@Injectable()
export class WarehouseService {
  constructor(private readonly prisma: PrismaService) {}

  generateUniqueCode(): number {
    const randomNumber = Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000;

    const codeString = randomNumber.toString();

    return parseInt(codeString.substring(0, Math.min(codeString.length, 6)));
  }

  async create(data: CreateWarehouseDto) {
    let code = this.generateUniqueCode();
    
    console.log(`ANTES: ${code}`);
    while (true) {
      const existsWarehouse = await this.prisma.warehouse.findUnique({
        where: { code },
      });
      if (!existsWarehouse) {
        break;
      }
      code = this.generateUniqueCode();
    }

    const [existsEmail, existsTelephone] = await Promise.all([
      await this.prisma.warehouse.findFirst({ where: { email: data.email } }),
      await this.prisma.warehouse.findFirst({
        where: { telephone: data.telephone },
      }),
    ]);

    if (existsEmail || existsTelephone) {
      throw new CustomHttpException(
        HttpStatus.CONFLICT,
        'Email or telephone already exists',
      );
    }

    data.code = code;
    const warehouse = await this.prisma.warehouse.create({
      data,
    });

    return warehouse;
  }
  async findAll() {
    const warehouses = await this.prisma.warehouse.findMany({
      include: { usersWarehouse: true },
    });
    console.log(warehouses);

    if (warehouses.length == 0) {
      throw new NotFoundException('warehouse');
    }
    return warehouses;
  }
}
