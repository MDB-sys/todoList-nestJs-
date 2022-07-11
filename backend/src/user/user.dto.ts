import { IsAlphanumeric, IsNotEmpty, Validate } from 'class-validator';
import { CustomePassword } from 'src/validation/custome.validation';

export class CreateUserDto {
  @IsAlphanumeric('en-US', { message: 'hanya boleh huruf dan angka' })
  @IsNotEmpty({ message: 'tidak boleh kosong' })
  name: string;

  @Validate(CustomePassword, {
    message:
      'harus di isi dengan huruf kapital huruf kecil simbol dan juga angka',
  })
  @IsNotEmpty({ message: 'tidak boleh kosong' })
  password: string;
}
