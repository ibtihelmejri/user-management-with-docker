"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const registrations_controller_1 = require("./registrations.controller");
const registrations_entity_1 = require("./registrations.entity");
const registrations_service_1 = require("./registrations.service");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let RegistrationsModule = class RegistrationsModule {
};
RegistrationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([registrations_entity_1.Registration]),
            jwt_1.JwtModule.register({
                secret: 'topSecret51',
                signOptions: {
                    expiresIn: '24h',
                },
            }),
        ],
        controllers: [registrations_controller_1.RegistrationsController],
        providers: [registrations_service_1.RegistrationsService]
    })
], RegistrationsModule);
exports.RegistrationsModule = RegistrationsModule;
//# sourceMappingURL=registrations.module.js.map