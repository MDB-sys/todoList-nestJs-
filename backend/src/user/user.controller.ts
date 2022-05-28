import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Res,
  Response,
} from '@nestjs/common';
import { CreateUserDto } from './user.DTO';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findAll')
  async findAll() {
    return await this.userService.findAll();
  }

  @Post('findOne')
  async findOne(@Body('name') name: string, @Res() res: Response) {
    return await this.userService.findOne(name);
  }

  @Post('create')
  @Redirect('findAll')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('delete')
  @Redirect('findAll')
  async delete(@Body('name') name: string, @Body('password') password: string) {
    return this.userService.delete(name, password);
  }
}
