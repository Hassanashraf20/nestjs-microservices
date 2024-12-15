import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { NatsClintModule } from 'src/nats-clint/nats-clint.module';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payments } from 'src/entites/payments.entity';
import { User } from 'src/entites/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payments, User]), NatsClintModule],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
