import { PartialType } from '@nestjs/swagger';
import { CreateAssociateProductSupplierDto } from './create-associate-product-supplier.dto';

export class UpdateAssociateProductSupplierDto extends PartialType(CreateAssociateProductSupplierDto) {}
