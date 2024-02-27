import { Product } from 'src/modules/product/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';

export class Warehouse {
  id?: string;
  name: string;
  code: number;
  telephone: string;
  totalItems: number; //total de itens
  currentInventoryValue: number; // valor de inventario
  minInventoryThreshold: number; // Aciona alertas para estoque baixo
  maxInventoryThreshold: number; // Evita excesso de estoque
  users: User[];
  products: Product[];

  created_at?: string;
  updated_at?: string;
}
