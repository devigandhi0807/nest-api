import { Role } from "../role.enum";
import { LoginUserDto } from "./login-user.dto";
export declare class CreateUserDto extends LoginUserDto {
    user_name: string;
    role: Role;
}
