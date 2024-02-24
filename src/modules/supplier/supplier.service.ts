import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from 'src/exceptions/expection';

@Injectable()
export class SupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSupplierDto: CreateSupplierDto) {
    const existsSupplier = await this.prisma.supplier.findFirst({
      where: { cnpj: createSupplierDto.cnpj },
    });

    if (existsSupplier) throw new NotFoundException('Supplier already exists');

    const createSupplier = await this.prisma.supplier.create({
      data: createSupplierDto,
    });
    return createSupplier;
  }

  async findAll() {
    const existsSuppliers = await this.prisma.supplier.findMany();

    if (existsSuppliers.length === 0) throw new NotFoundException('Supplier');

    return existsSuppliers;
  }

}
