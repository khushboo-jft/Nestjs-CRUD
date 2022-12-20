import { ModelsService } from './models.service';
export declare class ModelsController {
    private readonly userService;
    constructor(userService: ModelsService);
    createUser(username: string, password: string): Promise<any>;
    getAllUsers(): Promise<any>;
}
