import {
  AssociateProductSupplier,
  CategoryProduct,
  Warehouse,
} from '@prisma/client';

export class Product {
  id?: string;
  name: string;
  unit_of_measurement: string;
  description?: string;
  price: number;
  warehouses?: Warehouse[];

  category: CategoryProduct;
  categoryProductId?: string;

  ProductSupplier?: AssociateProductSupplier[];
  created_at?: Date;
  updated_at?: Date;
}