import { PartialType } from '@nestjs/swagger';
import { CreateAssociateWarehouseProductDto } from './create-associate-warehouse-product.dto';

export class UpdateAssociateWarehouseProductDto extends PartialType(CreateAssociateWarehouseProductDto) {}
