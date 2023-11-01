import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, isString } from 'class-validator';

export class CreatePersonDto {
    @ApiProperty()
    @IsString()
    name: string;
 
    @ApiProperty()
    @IsOptional()
    @IsString()
    date_birth?: string;
    
    @ApiProperty()
    telephone: string;
 
    @ApiProperty()
    address: string;
}
