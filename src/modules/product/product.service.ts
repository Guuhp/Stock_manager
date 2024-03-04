import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { NotFoundException } from 'src/exceptions/expection';
import { WarehouseService } from '../warehouse/warehouse.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly warehouseService: WarehouseService,
  ) {}

  generateSku(name, code, brand) {
    const codeI = String(code);
    const sku = `${name}-${brand}-${codeI}`;
    return sku;
  }

  generateBarCode() {
    const numerosAleatorios = Array(13).fill(null);
    numerosAleatorios.forEach((_, i) => {
      numerosAleatorios[i] = Math.floor(Math.random() * 10);
    });
    const codigoAleatorio = numerosAleatorios.join('');
    return codigoAleatorio;
  }

  async findAll() {
    const users = await this.prisma.product.findMany({});
    if (users.length === 0) throw new NotFoundException('products');
    return users;
  }

  async update(id: string, data: UpdateProductDto) {
    const existsUser = await this.prisma.product.findFirst({ where: { id } });

    if (!existsUser) throw new NotFoundException('user');

    const userUpdate = await this.prisma.product.update({
      where: { id },
      data,
    });
    return userUpdate;
  }

  async create(data: CreateProductDto) {
    let ni = this.warehouseService.generateUniqueCode();
    let sku = this.generateSku(data.name, ni, data.brand);
    let barCode = this.generateBarCode();

    while (true) {
      const [existsSku, existsBarCode] = await Promise.all([
        await this.prisma.product.findUnique({
          where: { sku },
        }),
        await this.prisma.product.findUnique({
          where: { barCode },
        }),
      ]);

      if (!existsSku && !existsBarCode) {
        break;
      }
      ni = this.warehouseService.generateUniqueCode();
      sku = this.generateSku(data.name, ni, data.brand);
      barCode = this.generateBarCode();
    }

        const product = await this.prisma.product.create({
          data: {
            ...data,
            sku,
            barCode,
            ni
          },
        });
    
        return product;
  }

  //GERAR O QRCODE
  //SCANEAR O QRCODE
}
