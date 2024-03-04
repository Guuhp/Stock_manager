import { AssociateProductSupplier } from 'src/modules/associates/associate-product-supplier/entities/associate-product-supplier.entity';
import { AssociateWarehouseProduct } from 'src/modules/associates/associate-warehouse-product/entities/associate-warehouse-product.entity';
import { CategoryProduct } from 'src/modules/category-product/entities/category-product.entity';
import { Warehouse } from 'src/modules/warehouse/entities/warehouse.entity';

export class Product {
  id?: string;
  name: string;
  unit_of_measurement: string;
  description?: string;
  price: number;
  weight: number;
  dimensions: string;
  brand: string;
  sku?: string;
  barCode?: string;
  ni:number;
  currentStockQuantity: number;
  minimumStockLevel: number;
  reorderQuantity: number;
  imageUrl?: string;
  categoryProductId?: string;

  warehouses: Warehouse[];
  category?: CategoryProduct;
  ProductSupplier: AssociateProductSupplier[];
  created_at?: Date;
  updated_at?: Date;
  AssociateWarehouseProduct?: AssociateWarehouseProduct[];
}
