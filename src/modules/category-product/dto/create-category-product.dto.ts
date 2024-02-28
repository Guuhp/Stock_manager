import { IsDefined, IsString } from 'class-validator';
import { CategoryProduct } from '../entities/category-product.entity';

export class CreateCategoryProductDto extends CategoryProduct {
  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsString()
  slug!: string;
}
