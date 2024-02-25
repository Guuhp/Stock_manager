import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAssociateProductSupplierDto } from './dto/create-associate-product-supplier.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from 'src/exceptions/expection';

@Injectable()
export class AssociateProductSupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async associateProductSupplier(data: CreateAssociateProductSupplierDto) {
    const [existsProduct, existsSupplier] = await Promise.all([
      await this.prisma.product.findFirst({ where: { id: data.productId } }),
      await this.prisma.supplier.findFirst({ where: { id: data.supplierId } }),
    ]);

    if (!existsProduct || !existsSupplier)
      throw new NotFoundException('Product or Supplier');

    const existingAssociation =
      await this.prisma.associateProductSupplier.findFirst({
        where: {
          productId: data.productId,
          supplierId: data.supplierId,
        },
      });
    if (existingAssociation) {
      throw new ConflictException('Association already exists');
    }
    const createAssociate = await this.prisma.associateProductSupplier.create({
      data,
    });
    return createAssociate;
  }

  async removeAssociateProductSupplier(id: string) {
    const existAssociate = await this.prisma.associateProductSupplier.findFirst(
      {
        where: { id },
      },
    );

    if (!existAssociate) throw new NotFoundException('associate');

    await this.prisma.associateProductSupplier.delete({
      where: { id },
    });
    
    return { success: true, message: 'association successfully deleted' };
  }

  async findAll() {
    return await this.prisma.associateProductSupplier.findMany();
  }
}
