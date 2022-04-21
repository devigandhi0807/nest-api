import { Repository } from 'typeorm';
import { User } from './models/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
}
