import { Role } from './role.enum';

export interface UserI {
  id?: number;
  user_name?: string;
  email?: string;
  password?: string;
  role?: Role;
}
