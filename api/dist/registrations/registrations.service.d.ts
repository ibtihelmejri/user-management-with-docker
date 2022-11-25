import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentiels.dto";
import { Registration } from "./registrations.entity";
import { JwtService } from '@nestjs/jwt';
export declare class RegistrationsService {
    private registrationRepo;
    private jwtService;
    constructor(registrationRepo: Repository<Registration>, jwtService: JwtService);
    signup(authCredentialsDto: AuthCredentialsDto): Promise<any>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
