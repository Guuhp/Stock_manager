import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  InternalErrorException,
  NotFoundException,
} from 'src/exceptions/expection';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEmployeeDto) {
    try {
      const employee = await this.prisma.employee.create({ data });
      
      return employee;

    } catch (error) {
      throw new InternalErrorException('Unable to create Employee');
    }
  }

  async findAll() {
    const employees = await this.prisma.employee.findMany({
      include: { person: true },
    });
    if (employees.length == 0) {
      throw new NotFoundException('employee');
    }
    return employees;
  }
}
