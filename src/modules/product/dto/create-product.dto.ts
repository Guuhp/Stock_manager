import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto {
  @ApiProperty({ type: String })
  @IsDefined()
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsString()
  unit_of_measurement: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: Number })
  @IsDefined()
  price: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  weight: number;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsString()
  dimensions: string;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsString()
  brand: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  sku?: string;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  @IsDefined()
  ni!: number;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  address:string

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  barCode?: string;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  currentStockQuantity: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  minimumStockLevel: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  reorderQuantity: number;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsString()
  categoryProductId: string;
}
