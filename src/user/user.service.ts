import { Inject, Injectable } from '@nestjs/common';
import { from,Observable ,switchMap} from 'rxjs';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';
import { UserI } from './models/user.interface';
import { map } from 'rxjs/operators';
import { CreateUserDto } from './models/dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private userRepository:Repository<User>){}
 // createNewUser(newUser:CreateUserDto): Observable<UserI>{
//const userEntity = this.userRepository.create(newUser);
//return this.emailExist(userEntity.email).pipe(switchMap((isEmailExist:boolean)=>)
  //}
  // private emailExist(email: string):Observable<boolean>{
  //   return from(this.userRepository.findOne({email})).pipe(
  //     map((user:UserI)=>{
  //       if(user){
  //         return true;
  //       }else{
  //         return false;
  //       }
  //     })
  //   )
  // }
}
