import { Injectable, Inject } from '@nestjs/common';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return this.userRepository.findAll();
    } catch (error) {
      console.log(error.error);
      return error.error;
    }
  }

  async findOne(name: string): Promise<User> {
    try {
      return await this.userRepository.findOne({
        where: {
          name,
        },
      });
    } catch (error) {
      console.log(error);
      return error.error;
    }
  }

  async create(createUserDto) {
    try {
      const { name, password } = createUserDto;

      return await this.userRepository.create({
        name,
        password,
      });
    } catch (error) {
      console.log(error);
      return error.error;
    }
  }
}
