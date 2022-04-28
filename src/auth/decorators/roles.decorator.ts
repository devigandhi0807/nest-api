import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export const userRoles = (...userRoles: string[]) =>
  SetMetadata(ROLES_KEY, userRoles);
