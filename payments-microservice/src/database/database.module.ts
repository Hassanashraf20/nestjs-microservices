import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payments } from 'src/entites/payments.entity';
import { User } from 'src/entites/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'nestjs-db',
      entities: [Payments, User],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
