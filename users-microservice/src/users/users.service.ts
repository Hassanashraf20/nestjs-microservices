import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }
  async findAllUsers() {
    return await this.userRepository.find();
  }

  async findUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if(!user){
      throw new Error(`User ${id} not found`);
    }
    return user;
  }
}
