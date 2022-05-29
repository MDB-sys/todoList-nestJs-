import { IsAlphanumeric, isEmail } from 'class-validator';

export class CreateUserDto {
  @IsAlphanumeric()
  name: string;

  password: string;
}
