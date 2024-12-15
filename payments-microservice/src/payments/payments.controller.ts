import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { PaymentsService } from './payments.service';
import { create } from 'domain';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(
    @Inject('NATS_CLIENT') private natsClient: ClientProxy,
    private readonly paymentService: PaymentsService,
  ) {}

  @EventPattern('create-payment')
  async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    const payment = await this.paymentService.createPayment(createPaymentDto);
    this.natsClient.emit('Payment-Created', payment);
    return payment;
  }

  @EventPattern({ cmd: 'get-payment' })
  async getPayment(@Payload() data: any) {
    const payment = await this.paymentService.getPayment(data.id);
    return payment;
  }
}
