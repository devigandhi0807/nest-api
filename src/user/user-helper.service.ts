import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from './models/dto/create-user.dto';
import { LoginUserDto } from './models/dto/login-user.dto';
import { UserI } from './models/user.interface';

@Injectable()
export class UserHelperService {
  createUserDtoToEntity(createUserDto:CreateUserDto):Observable<UserI>{
  return of({
  user_name: createUserDto.user_name,
  email: createUserDto.email,
  password: createUserDto.password,
  role: createUserDto.role
});
  }
  loginUserDtoToEntity(loginUserDto: LoginUserDto):Observable<UserI>{
    return of({
    email:loginUserDto.email,
    password:loginUserDto.password
  });
    }
}
