import { PartialType } from '@nestjs/swagger';
import { CreateAssociateUserWarehouseDto } from './create-associate-user-warehouse.dto';

export class UpdateAssociateUserWarehouseDto extends PartialType(CreateAssociateUserWarehouseDto) {}
