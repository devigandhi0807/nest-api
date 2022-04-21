import { DataSource } from 'typeorm';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (ds: DataSource) => ds.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
