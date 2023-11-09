import { HttpStatus, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CustomHttpException,
  InternalErrorException,
  NotFoundException,
} from 'src/exceptions/expection';

@Injectable()
export class PersonService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePersonDto) {
    try {
      const person = await this.prisma.person.create({
        data: {
          ...data,
          date_birth: new Date(data.date_birth),
        },
      });
     
      if (!person) {
        throw new InternalErrorException('Unable to create user');
      }
      return person;
    } catch (error) {
      throw new InternalErrorException('Unable to create user');
    }
  }

  async findAll() {
    const person = await this.prisma.person.findMany();
    if (person.length == 0) {
      throw new NotFoundException('person');
    }
    return person;
  }
}
