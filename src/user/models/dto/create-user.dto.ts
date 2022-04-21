import { IsNotEmpty, IsString } from "class-validator";
import { Role } from "../role.enum";
import { LoginUserDto } from "./login-user.dto";

export class CreateUserDto extends LoginUserDto{
  @IsString()
  @IsNotEmpty()
  user_name:string;

  @IsString()
  @IsNotEmpty()
  role:Role;

}
