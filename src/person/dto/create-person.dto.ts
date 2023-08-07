import { IsDateString, IsOptional, IsString, isString } from 'class-validator';

export class CreatePersonDto {
    @IsString()
    name: string;
 
    @IsOptional()
    @IsString()
    date_birth?: string;
    
    telephone: string;
 
    address: string;
}
