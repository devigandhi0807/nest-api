import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { from, Observable, throwError } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';
import { Role } from './models/role.enum';
import { AuthService } from 'src/auth/auth.service';
import { UserI } from './models/user.interface';
import { catchError, map, switchMap } from 'rxjs/operators';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private authService: AuthService,
  ) {}
  signUp(user: UserI): Observable<UserI> {
    return this.authService.hashPassword(user.password).pipe(
      switchMap((hashPassword: string) => {
        const newUser = new User();
        newUser.user_name = user.user_name;
        newUser.email = user.email;
        newUser.password = hashPassword;
        newUser.role = Role.USER;
        return from(this.userRepository.save(newUser)).pipe(
          map((user: UserI) => {
            const { password, ...result } = user;
            return result;
          }),
          catchError((err) => throwError(err)),
        );
      }),
    );
  }

  findUserById(uid: number): Observable<any> {
    return from(this.userRepository.findOne({ where: { id: uid } })).pipe(
      map((user: UserI) => {
        if (!user) {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        const { password, ...result } = user;
        return result;
      }),
    );
  }
  findAllUsers(): Observable<UserI[]> {
    return from(this.userRepository.find()).pipe(
      map((users: UserI[]) => {
        users.forEach((e) => delete e.password);
        return users;
      }),
    );
  }
  findUserByEmail(mail: string): Observable<any> {
    return from(this.userRepository.findOne({ where: { email: mail } }));
  }

  signIn(user: UserI): Observable<string> {
    return this.validateUserInfo(user.email, user.password).pipe(
      switchMap((user: UserI) => {
        if (user) {
          return this.authService
            .generateJwt(user)
            .pipe(map((jwtKey: string) => jwtKey));
        } else {
          throw new HttpException('UnAuthozied User!', HttpStatus.UNAUTHORIZED);
        }
      }),
    );
  }

  validateUserInfo(mail: string, pwd: string): Observable<UserI> {
    return this.findUserByEmail(mail).pipe(
      switchMap((user: UserI) =>
        this.authService.comparedPassword(pwd, user.password).pipe(
          map((match: boolean) => {
            if (match) {
              const { password, ...result } = user; //remove pwd to view page
              return result;
            } else {
              throw new HttpException(
                'UnAuthozied User',
                HttpStatus.UNAUTHORIZED,
              );
            }
          }),
        ),
      ),
    );
  }
  updateUserById(id: number, user: UserI): Observable<UserI> {
    delete user.email;
    delete user.password;
    delete user.role;
    return from(this.userRepository.update(id, user)).pipe(
      switchMap(() => this.findUserById(id)),
    );
  }
  updateUserRole(id: number, user: User): Observable<any> {
    return from(this.userRepository.update(id, user));
  }
  deleteUserById(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }
}
