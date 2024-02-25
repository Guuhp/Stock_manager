import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, Min, MinLength } from 'class-validator';
import { Warehouse } from '../entities/warehouse.entity';

export class CreateWarehouseDto extends Warehouse {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(70)
    name: string;
  
    @ApiProperty({ type: String })
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @ApiProperty({ type: Number })
    code: number;
  
    @ApiProperty({ type: String })
    @IsNotEmpty()
    telephone: string;
  
    @ApiProperty({ type: Number })
    @Min(0)
    totalItems: number;
  
    @ApiProperty({ type: Number })
    @Min(0)
    currentInventoryValue: number;
  
    @ApiProperty({ type: Number })
    @Min(0)
    minInventoryThreshold: number;
  
    @ApiProperty({ type: Number })
    maxInventoryThreshold: number;
}


