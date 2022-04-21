import { DataSource } from 'typeorm';
import { User } from './user.entity';
export declare const userProviders: {
    provide: string;
    useFactory: (ds: DataSource) => import("typeorm").Repository<User>;
    inject: string[];
}[];
