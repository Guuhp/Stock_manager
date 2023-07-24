import { IsOptional, IsString } from 'class-validator';

export class CreatePersonDto {
    @IsString()
    name: string;
 
    @IsOptional()
    date_birth?: string;
    

    telephone: string;
 
    address: string;
}
