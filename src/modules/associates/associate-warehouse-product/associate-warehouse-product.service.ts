import { ConflictException, Injectable } from '@nestjs/common';
import { NotFoundException } from 'src/exceptions/expection';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAssociateWarehouseProductDto } from './dto/create-associate-warehouse-product.dto';

@Injectable()
export class AssociateWarehouseProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.associateWarehouseProduct.findMany();
  }

  async AssociateWarehouseProduct(data: CreateAssociateWarehouseProductDto) {
    const [existsProduct, existsWarehouse] = await Promise.all([
      await this.prisma.product.findUnique({ where: { id: data.productId } }),
      await this.prisma.warehouse.findUnique({
        where: { id: data.warehouseId },
      }),
    ]);

    if (!existsProduct || !existsWarehouse) {
      throw new NotFoundException('User or Warehouse');
    }

    const existingAssociation =
      await this.prisma.associateWarehouseProduct.findFirst({
        where: {
          productId: data.productId,
          warehouseId: data.warehouseId,
        },
      });

    if (existingAssociation) {
      throw new ConflictException('Association already exists');
    }
    const associateWarehouseProduct =
      await this.prisma.associateWarehouseProduct.create({
        data,
      });
    return associateWarehouseProduct;
  }

  async removeAssociateWarehouseProduct(id: string) {
    const existAssociateWarehouseProduct =
      await this.prisma.associateWarehouseProduct.findFirst({
        where: { id },
      });

    if (!existAssociateWarehouseProduct) {
      throw new NotFoundException('AssociateUserWarehouse not found');
    }

   await this.prisma.associateWarehouseProduct.delete({
      where: { id },
    });

    return { success: true, message: 'association successfully deleted' };
  }
}
