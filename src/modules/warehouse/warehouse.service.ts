import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import {
  CustomHttpException,
  NotFoundException,
} from 'src/exceptions/expection';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

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
    const warehouse = await this.prisma.warehouse.create({
      data,
    });
    return warehouse;
  }

  async findAll() {
    const warehouses = await this.prisma.warehouse.findMany();
    if (warehouses.length == 0) {
      throw new NotFoundException('warehouse');
    }
    return warehouses;
  }

  async update(id: string, data: UpdateWarehouseDto) {
    const existsWarehouse = await this.prisma.warehouse.findUnique({
      where: { id },
    });

    if (!existsWarehouse) {
      throw new NotFoundException('warehouse');
    }

    if (data.code !== undefined) {
      const existsCode = await this.prisma.warehouse.findUnique({
        where: { code: data.code },
      });

      if (existsCode) {
        throw new NotFoundException('warehouse');
      }
    }

    const updateWarehouse = await this.prisma.warehouse.update({
      where: { id },
      data,
    });

    return updateWarehouse;
  }

  async findById(id: string){
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id },
    });

    if (!warehouse) {
      throw new NotFoundException('warehouse');
    }

    return warehouse;
  }
}
