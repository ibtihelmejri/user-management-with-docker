import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.entity";
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<User[]>;
}
