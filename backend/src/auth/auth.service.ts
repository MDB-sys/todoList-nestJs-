import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(username: string, pass: string): Promise<any> {
    console.log(username);
    const user = await this.userService.findOne(username);
    if (user && user.password == pass) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
}
