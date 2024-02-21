import { Product } from '@prisma/client';
import { User } from 'src/modules/users/entities/user.entity';

export class Warehouse {
  id?: string;
  name: string;
  code: number;
  telephone: string;
  users: User[];
  products: Product[];

  created_at?: string;
  updated_at?: string;
}
