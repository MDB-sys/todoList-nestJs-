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
      console.log(error);
      return error.error;
    }
  }
}
