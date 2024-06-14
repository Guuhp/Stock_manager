import { HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import {
  CustomHttpException,
  NotFoundException,
} from 'src/exceptions/expection';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { ProductService } from '../product/product.service';
import { ReceivedProductDto } from './dto/receiveProduct.dto';

@Injectable()
export class WarehouseService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => ProductService))
    private productService: ProductService,
  ) {}

  generateUniqueCode(): number {
    const randomNumber = Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000;
    const codeString = randomNumber.toString();
    return parseInt(codeString.substring(0, Math.min(codeString.length, 6)));
  }

  async create(data: CreateWarehouseDto) {
    let code = this.generateUniqueCode();

    console.log(`ANTES: ${code}`);
    while (true) {
      const existsWarehouse = await this.prisma.warehouse.findUnique({
        where: { code },
      });
      if (!existsWarehouse) {
        break;
      }
      code = this.generateUniqueCode();
    }

    const [existsEmail, existsTelephone] = await Promise.all([
      await this.prisma.warehouse.findFirst({ where: { email: data.email } }),
      await this.prisma.warehouse.findFirst({
        where: { telephone: data.telephone },
      }),
    ]);

    if (existsEmail || existsTelephone) {
      throw new CustomHttpException(
        HttpStatus.CONFLICT,
        'Email or telephone already exists',
      );
    }

    data.code = code;
    const warehouse = await this.prisma.warehouse.create({
      data,
    });

    return warehouse;
  }
  async findAll() {
    const warehouses = await this.prisma.warehouse.findMany({
      include: { usersWarehouse: true, AssociateWarehouseProduct: true },
    });

    if (warehouses.length == 0) {
      throw new NotFoundException('warehouse');
    }
    return warehouses;
  }

  async update(id: string, data: UpdateWarehouseDto) {
    const existsWarehouse = await this.prisma.warehouse.findFirst({
      where: { id },
    });

    if (!existsWarehouse) throw new NotFoundException('Warehouse');

    const WarehouseUpdate = await this.prisma.warehouse.update({
      where: { id },
      data,
    });
    return WarehouseUpdate;
  }

  async receiveProduct(data: ReceivedProductDto) {
    const existsProduct = await this.productService.findProductForNi(
      data.niProduct,
    );

    existsProduct.currentStockQuantity += data.amount;

    const updatedProduct = await this.productService.update(
      existsProduct.id,
      existsProduct,
    );
    //ORGANIZAR PARA AJUSTAR OS OUTROS PARAMETROS
    return updatedProduct;
  }

  async getStockQuantity() {
    let sumQuantity = 0;
    const products = await this.prisma.product.findMany();
    products.forEach((product) => {
      sumQuantity += product.currentStockQuantity;
    });
    return { stockQuantity: sumQuantity };
  }

  //armazenarProduto(produto: Produto, localizacao: Localizacao):
  //obterLocalizacaoProduto(poduto: Produto):
  //listarLocaisDisponiveis():

  //registrarMovimentacao(produto: Produto, quantidade: number, tipoMovimentacao: TipoMovimentacao):
  //obterHistoricoMovimentacao(produto: Produto): Movimentacao[]
  //gerarRelatorioEstoque():
  //gerarRelatorioMovimentacao(periodo: Periodo):
}
