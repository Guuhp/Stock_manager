import { TypeInvoice } from 'src/enums/typeInvoice.enum';
import { ProductQuantity } from '../dto/create-invoice.dto';

export class Invoice {
  id: string;
  products: ProductQuantity[];
  totalItens?: number;
  type: TypeInvoice;
}
