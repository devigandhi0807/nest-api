import { Observable } from 'rxjs';
import { CreateUserDto } from './models/dto/create-user.dto';
import { LoginUserDto } from './models/dto/login-user.dto';
import { UserI } from './models/user.interface';
export declare class UserHelperService {
    createUserDtoToEntity(createUserDto: CreateUserDto): Observable<UserI>;
    loginUserDtoToEntity(loginUserDto: LoginUserDto): Observable<UserI>;
}
