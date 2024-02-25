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

  async create(data: CreateWarehouseDto) {
    const existsWarehouse = await this.prisma.warehouse.findUnique({
      where: { code: data.code },
    });
    if (existsWarehouse) {
      throw new CustomHttpException(
        HttpStatus.BAD_REQUEST,
        'existing warehouse',
      );
    }
    console.log(data);
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
