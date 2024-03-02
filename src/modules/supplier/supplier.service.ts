import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { NotFoundException } from 'src/exceptions/expection';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSupplierDto: CreateSupplierDto) {
    const existsSupplier = await this.prisma.supplier.findFirst({
      where: { cnpj: createSupplierDto.cnpj },
    });
    console.log(existsSupplier);

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

  async findSupplier(criterio: string) {
    try {
      const query = await this.prisma.supplier.findFirst({
        where: {
          OR: [
            { cnpj: { contains: criterio } },
            { email: { contains: criterio.toLowerCase() } },
          ],
        },
      });

      if (!query) throw new NotFoundException('Supplier not found');

      return query;
    } catch (error) {
      console.error('Erro ao encontrar fornecedor:', error);
      throw error;
    }
  }

  async update(id: string, data: UpdateSupplierDto) {
    const existsUser = await this.prisma.supplier.findFirst({ where: { id } });

    if (!existsUser) throw new NotFoundException('Supplier');

    const userUpdate = await this.prisma.supplier.update({
      where: { id },
      data,
    });
    return userUpdate;
  }

  async delete(id: string) {
    const user = await this.prisma.supplier.findFirst({
      where: { id },
    });

    if (!user) throw new NotFoundException('Supplier');

    await this.prisma.$transaction([
      this.prisma.supplier.updateMany({
        where: {
          id: user.id,
        },
        data: {
          is_active: false,
        },
      }),
    ]);

    return { status: 200, message: 'Supplier deleted successfully' };
  }
}
