import { Module } from '@nestjs/common';
import { DBModule } from 'src/db/db.module';
import { userProviders } from './models/user.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserHelperService } from './user-helper.service';

@Module({
  imports:[DBModule],
  controllers: [UserController],
  providers: [...userProviders,UserService, UserHelperService]
})
export class UserModule {}
