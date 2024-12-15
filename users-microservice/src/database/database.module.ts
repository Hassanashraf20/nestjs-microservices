import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payments } from 'src/entities/payments.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'nestjs-db',
      entities: [User, Payments],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
