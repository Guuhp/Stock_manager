import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.product.findMany({});
    return users;
  }

  async create(data: CreateProductDto) {
    const product =this.prisma.product.create({
      data
    })

    return product
  }
}
