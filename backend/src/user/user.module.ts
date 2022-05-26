import { Module } from '@nestjs/common';
import { databaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [databaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
