import { Controller, Get } from '@nestjs/common';

@Controller('transaction')
export class TransactionController {
  @Get()
  getAllTransactions(): any {
    return "Hola que tal"
  }
}
