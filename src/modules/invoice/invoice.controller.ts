import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { TypeInvoice } from 'src/enums/typeInvoice.enum';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Post(':typeinvoice')
  create(
    @Param('typeinvoice') typeinvoice: TypeInvoice,
    @Body() createInvoiceDto: CreateInvoiceDto,
  ) {
    return this.invoiceService.GenerateInvoice(typeinvoice,createInvoiceDto);
  }
}
