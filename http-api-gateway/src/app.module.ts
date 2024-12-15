import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
// import { NatsClintModule } from './nats-clint/nats-clint.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    UsersModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
