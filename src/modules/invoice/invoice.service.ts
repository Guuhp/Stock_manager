import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeInvoice } from 'src/enums/typeInvoice.enum';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const invoices = await this.prisma.invoice.findMany({
      include: {
        products: true,
      },
    });
    return invoices;
  }

  async GenerateInvoice(typeInvoice: TypeInvoice, data: CreateInvoiceDto) {
    try {
      const totalItens = data.products.reduce(
        (total, product) => total + product.quantity,
        0,
      );

      const createInvoice = await this.prisma.invoice.create({
        data: {
          type: typeInvoice,
          total: totalItens,
        },
      });

      // Mapeia os dados dos produtos e associa o ID da fatura
      const productsData = data.products.map((product) => ({
        ...product,
        invoiceId: createInvoice.id,
      }));

      // Cria os registros de quantidade de produtos
      await this.prisma.productQuantity.createMany({
        data: productsData,
      });

      // Retorna a fatura criada
      return createInvoice;
    } catch (error) {
      throw new Error(`Erro ao criar fatura: ${error.message}`);
    }
  }
}
