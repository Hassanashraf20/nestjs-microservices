import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { NatsClintModule } from 'src/nats-clint/nats-clint.module';

@Module({
  imports: [NatsClintModule],
  controllers: [UsersController]
})
export class UsersModule {}
