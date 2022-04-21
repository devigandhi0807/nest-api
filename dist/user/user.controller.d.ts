import { UserService } from './user.service';
import { UserHelperService } from './user-helper.service';
export declare class UserController {
    private readonly userService;
    private readonly userHelperService;
    constructor(userService: UserService, userHelperService: UserHelperService);
}
