"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const registrations_entity_1 = require("./registrations.entity");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let RegistrationsService = class RegistrationsService {
    constructor(registrationRepo, jwtService) {
        this.registrationRepo = registrationRepo;
        this.jwtService = jwtService;
    }
    async signup(authCredentialsDto) {
        const { email, password } = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        try {
            let newRegister = this.registrationRepo.create({
                email,
                password: hashedPassword,
            });
            await this.registrationRepo.save(newRegister);
            return newRegister;
        }
        catch (error) {
            console.log(error.code);
            if (error.code === "23505") {
                throw new common_1.ConflictException({
                    error: "Conflict",
                    message: error.detail,
                    statusCode: 409,
                    id: "existing.email",
                });
            }
            else {
                throw new common_1.InternalServerErrorException("Error when creating user");
            }
        }
    }
    async signIn(authCredentialsDto) {
        const { email, password } = authCredentialsDto;
        const register = await this.registrationRepo
            .createQueryBuilder('registration')
            .select('registration')
            .addSelect('registration.password')
            .where({ email })
            .getOne();
        if (register && (await bcrypt.compare(password, register.password))) {
            const payload = { email };
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            throw new common_1.UnauthorizedException({
                error: 'Unauthorized',
                message: 'Please check your login credentials',
                statusCode: 401,
                id: 'unauthorized',
            });
        }
    }
};
RegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registrations_entity_1.Registration)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], RegistrationsService);
exports.RegistrationsService = RegistrationsService;
//# sourceMappingURL=registrations.service.js.map