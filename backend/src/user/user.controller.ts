import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateUserDto } from './user.DTO';
import { UserService } from './user.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('findAll')
  async findAll() {
    return await this.userService.findAll();
  }

  @Post('findOne')
  async findOne(@Body('name') name: string) {
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

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
