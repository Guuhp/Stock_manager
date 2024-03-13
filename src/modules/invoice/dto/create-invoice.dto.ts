import { Product } from 'src/modules/product/entities/product.entity';
import { Invoice } from '../entities/invoice.entity';
import { TypeInvoice } from 'src/enums/typeInvoice.enum';

export class ProductQuantity {
  id: string;
  product: Product;
  productId: string;
  quantity: number;
  Invoice: Invoice;
  invoiceId: string;
}

export class CreateInvoiceDto {
  id: string;
  products: ProductQuantity[];
  totalItens?: number;
  type: TypeInvoice;
}
