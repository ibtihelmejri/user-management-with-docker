import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.entity";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<User[]>;
}
