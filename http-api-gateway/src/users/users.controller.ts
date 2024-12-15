import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_CLIENT') private natsClint: ClientProxy) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.natsClint.send({ cmd: 'create_user' }, createUserDto);
  }

  @Get()
  async findAllUsers() {
    return this.natsClint.send({ cmd: 'find_all_users' }, {});
  }
  @Get(':id')
  async findUserById(@Param('id', ParseIntPipe) id: number) {
    return this.natsClint.send({ cmd: 'find_user_by_id' }, { id });
  }
}
