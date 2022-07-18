import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { databaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [databaseModule, AuthModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
