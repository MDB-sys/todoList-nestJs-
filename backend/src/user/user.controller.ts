import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Res,
  Response,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findAll')
  async findAll() {
    return await this.userService.findAll();
  }

  @Post('findOne')
  @Redirect('findAll')
  async findOne(
    @Body('name') name: string,
    @Body('id') id: number,
    @Res() res: Response,
  ) {
    return await this.userService.findOne(name, id);
  }
}
