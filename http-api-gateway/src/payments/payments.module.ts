import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { NatsClintModule } from 'src/nats-clint/nats-clint.module';

@Module({
  imports: [NatsClintModule],
  controllers: [PaymentsController]
})
export class PaymentsModule {}
