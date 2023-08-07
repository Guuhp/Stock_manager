import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonService {

  constructor(
    private readonly prisma: PrismaService
  ) { }


  create(data: CreatePersonDto) {
    return this.prisma.person.create({
      data:{
        ...data,
        date_birth:new Date(data.date_birth)
      }
    });
  }

  findAll() {
    return this.prisma.person.findMany()
  }


}
