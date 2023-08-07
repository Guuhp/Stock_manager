import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {

  constructor(
    private readonly prisma:PrismaService
  ){}

  create(data: CreateEmployeeDto) {
    return this.prisma.employee.create({data});
  }

  findAll() {
    return this.prisma.employee.findMany({
      //include:{person:true}
    });
  }

}
