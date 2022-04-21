import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UserI } from '../user/models/user.interface';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateJwt(user: UserI): Observable<string>;
    hashPassword(password: string): Observable<string>;
    comparedPassword(password: string, storedPasswordHash: string): Observable<any>;
    login(): void;
    register(): void;
}
