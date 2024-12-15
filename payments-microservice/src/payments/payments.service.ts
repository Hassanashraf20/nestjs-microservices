import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payments } from 'src/entites/payments.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments)
    private paymentsRepository: Repository<Payments>,
    @Inject('NATS_CLIENT') private natsClient: ClientProxy,
  ) {}

  async createPayment(CreatePaymentDto: CreatePaymentDto) {
    // Resolve the Observable to get the user
    const user = await firstValueFrom(
      this.natsClient.send(
        { cmd: 'find_user_by_id' },
        { id: CreatePaymentDto.userId },
      ),
    );

    // Ensure the user exists
    if (!user) {
      throw new Error(`User with ID ${CreatePaymentDto.userId} not found`);
    }
    const payment = this.paymentsRepository.create({
      ...CreatePaymentDto,
      user,
    });
    return await this.paymentsRepository.save(payment);
  }
  async getPayment(id: number) {
    return await this.paymentsRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });
  }
}
