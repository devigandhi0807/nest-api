import { Module, forwardRef } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserHelperService } from './user-helper.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService, UserHelperService],
  exports: [UserService],
})
export class UserModule {}
