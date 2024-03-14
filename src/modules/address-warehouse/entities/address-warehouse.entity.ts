import { StatusAddress } from 'src/enums/statusAddress.enum';
import { Product } from 'src/modules/product/entities/product.entity';
import { Warehouse } from 'src/modules/warehouse/entities/warehouse.entity';

export class AddressWarehouse {
  id?: string;

  address: string;

  statusAddress?: StatusAddress;

  product?: Product;

  productId?: string;

  Warehouse: Warehouse;

  warehouseId: string;
}
