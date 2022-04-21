import { Body, Controller, Post } from '@nestjs/common';
import { Observable, switchMap } from 'rxjs';
import { UserI } from './models/user.interface';
import { CreateUserDto } from './models/dto/create-user.dto';
import { UserService } from './user.service';
import { UserHelperService } from './user-helper.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService,private readonly userHelperService: UserHelperService){}
//@Post()
// addUser(@Body() createUserDto:CreateUserDto): Observable<UserI>{
// return this.userHelperService.createUserDtoToEntity(createUserDto).pipe(
//   switchMap((user:UserI)=>this.userService.createNewUser(user))
// )
// }

}
