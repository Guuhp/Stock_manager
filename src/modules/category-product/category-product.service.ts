import { Injectable } from '@nestjs/common';
import { CreateCategoryProductDto } from './dto/create-category-product.dto';
import { UpdateCategoryProductDto } from './dto/update-category-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from 'src/exceptions/expection';

@Injectable()
export class CategoryProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryProductDto: CreateCategoryProductDto) {
    const existsCategory = await this.prisma.categoryProduct.findFirst({
      where: { name: createCategoryProductDto.name },
    });

    if (existsCategory) throw new NotFoundException('Category already exists');

    const createCategoryProduct = await this.prisma.categoryProduct.create({
      data: createCategoryProductDto,
    });

    return createCategoryProduct;
  }

  async findAll() {
    const category = await this.prisma.categoryProduct.findMany();
    if (category.length === 0) throw new NotFoundException('Category');
    console.log(category);
    return category;
  }

  async findByCategory(nameCategory: string) {
    const existsCategory = await this.prisma.categoryProduct.findFirst({
      where: { name: nameCategory },
    });
    if (!existsCategory) throw new NotFoundException('Category not found');
    return existsCategory;
  }

  async update(id: string, updateCategoryProductDto: UpdateCategoryProductDto) {
    const existsCategory = await this.prisma.categoryProduct.findFirst({
      where: { id },
    });

    if (!existsCategory)
      throw new NotFoundException('Category not found');

    const updateCategoryProduct = await this.prisma.categoryProduct.update({
      where: { id },
      data: updateCategoryProductDto,
    });
    return updateCategoryProduct;
  }

  async remove(id: string) {
    const existsCategory = await this.prisma.categoryProduct.findFirst({
      where: { id },
    });

    if (!existsCategory) throw new NotFoundException('Category not found');

    await this.prisma.categoryProduct.delete({
      where: { id },
    });
    return { success: true, message: 'category successfully deleted' };
  }
}
