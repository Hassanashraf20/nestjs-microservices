import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_CLIENT') private natsClient: ClientProxy) {}

  @Post()
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    this.natsClient.emit('create-payment', createPaymentDto);
    return { message: 'Payment created' };
  }

  @Get(':id')
  async getPayment(@Param('id', ParseIntPipe) id: number) {
    return this.natsClient.send({ cmd: 'get-payment' }, { id });
  }
}
