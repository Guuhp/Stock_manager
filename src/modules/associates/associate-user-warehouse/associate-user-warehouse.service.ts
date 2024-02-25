import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAssociateUserWarehouseDto } from './dto/create-associate-user-warehouse.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from 'src/exceptions/expection';

@Injectable()
export class AssociateUserWarehouseService {
  constructor(private readonly prisma: PrismaService) {}

  async AssociateUserWarehouse(data: CreateAssociateUserWarehouseDto) {
    const [existsUser, existsWarehouse] = await Promise.all([
      await this.prisma.user.findUnique({ where: { id: data.userId } }),
      await this.prisma.warehouse.findUnique({
        where: { id: data.warehouseId },
      }),
    ]);

    if (!existsUser || !existsWarehouse) {
      throw new NotFoundException('User or Warehouse');
    }

    const existingAssociation =
      await this.prisma.associateUserWarehouse.findFirst({
        where: {
          userId: data.userId,
          warehouseId: data.warehouseId,
        },
      });

    if (existingAssociation) {
      throw new ConflictException('Association already exists');
    }
    const associateUserWarehouse =
      await this.prisma.associateUserWarehouse.create({
        data,
      });
    return associateUserWarehouse;
  }

  async removeAssociateUserWarehouse(id: string) {
    const existAssociateUserWarehouse =
      await this.prisma.associateUserWarehouse.findFirst({
        where: { id },
      });

    if (!existAssociateUserWarehouse) {
      throw new NotFoundException('AssociateUserWarehouse not found');
    }

   await this.prisma.associateUserWarehouse.delete({
      where: { id },
    });

    return { success: true, message: 'association successfully deleted' };
  }

  findAll() {
    return this.prisma.associateUserWarehouse.findMany();
  }
}
