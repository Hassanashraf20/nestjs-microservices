import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PaymentsModule, DatabaseModule],
})
export class AppModule {}
