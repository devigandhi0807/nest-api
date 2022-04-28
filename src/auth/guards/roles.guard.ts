import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Observable<boolean> | Promise<boolean> {
    const rolesReflector = this.reflector.get<string[]>(
      ROLES_KEY,
      context.getHandler(),
    );
    if (!rolesReflector) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user.user;
    //console.log(user);
    return this.userService.findUserById(user.id).pipe(
      map((user) => {
        const userRole = () => rolesReflector.indexOf(user.role) > -1; // rolesReflector array contains role like admin ,user etc.. if it contains the enum Role class value indexOf fn return +ve value if it not contain enum Role class value it return -1
        let permission = false;
        if (userRole()) {
          permission = true;
        }
        return permission && user;
      }),
    );
    //return matchRoles(roles, user.roles);
  }
}
