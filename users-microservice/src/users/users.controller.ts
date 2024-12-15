import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @MessagePattern({ cmd: 'create_user' })
  async createUser(@Payload() data: CreateUserDto) {
    return await this.userService.createUser(data);
  }
  @EventPattern('Payment-Created')
  async ifPaymentCreated(@Payload() data: any) {
    if (!data) {
      return false;
    }
    console.log('from user microservice', data);
  }

  @MessagePattern({ cmd: 'find_all_users' })
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  @MessagePattern({ cmd: 'find_user_by_id' })
  async findUserById(@Payload() data: any) {
    const user = await this.userService.findUserById(data.id);
    return user;
  }
}
