import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserI } from './models/user.interface';
import { CreateUserDto } from './models/dto/create-user.dto';
import { UserService } from './user.service';
import { UserHelperService } from './user-helper.service';
import { User } from './models/user.entity';
import { userRoles } from 'src/auth/decorators/roles.decorator';
import { Role } from './models/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userHelperService: UserHelperService,
  ) {}
  @Post('register')
  register(@Body() createUserDto: CreateUserDto): Observable<UserI | object> {
    return this.userHelperService.createUserDtoToEntity(createUserDto).pipe(
      switchMap((user: UserI) => this.userService.signUp(user)),
      catchError((err) => of({ error: err.message })),
    );
  }
  @Post('login')
  login(@Body() user: UserI): Observable<any> {
    return this.userService.signIn(user).pipe(
      map((jwt: string) => {
        return { accessToken: jwt };
      }),
    );
  }

  @Put(':id')
  editUserById(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ): Observable<UserI | object> {
    return this.userHelperService.createUserDtoToEntity(updateUserDto).pipe(
      switchMap((user: User) =>
        this.userService.updateUserById(Number(id), user),
      ),
      catchError((err) => of({ error: err.message })),
    );
  }
  @userRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':id/role')
  editUserRole(
    @Param('id') id: string,
    @Body() user: User,
  ): Observable<User | object> {
    return this.userService.updateUserRole(Number(id), user).pipe(
      map((user: User) => {
        if (user) {
          return user;
        } else {
          throw new HttpException(
            'User Role Not Updated',
            HttpStatus.NOT_MODIFIED,
          );
        }
      }),
    );
  }
  @Get('/:userId')
  getUserById(@Param('userId') id: string): Observable<any> {
    return this.userService.findUserById(Number(id));
  }
  @userRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getAllUsers(): Observable<UserI[]> {
    return this.userService.findAllUsers();
  }
  @Delete(':userId')
  removeUserById(@Param('userId') id: number): Observable<any> {
    return this.userService.deleteUserById(id);
  }
}
