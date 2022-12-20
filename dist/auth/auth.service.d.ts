import { JwtService } from '@nestjs/jwt';
import { ModelsService } from 'src/models/models.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: ModelsService, jwtService: JwtService);
    valiateUserCredentials(username: string, password: string): Promise<any>;
    loginWithCredentials(user: any): Promise<{
        access_token: string;
    }>;
}
