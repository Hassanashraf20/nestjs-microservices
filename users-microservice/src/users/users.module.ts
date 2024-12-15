import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { Payments } from 'src/entities/payments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Payments])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
