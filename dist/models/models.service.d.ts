import { Model } from 'mongoose';
import { User } from 'src/user.model';
export declare class ModelsService {
    private readonly userModel;
    constructor(userModel: Model<User>);
}
