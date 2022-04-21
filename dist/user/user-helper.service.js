"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHelperService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let UserHelperService = class UserHelperService {
    createUserDtoToEntity(createUserDto) {
        return (0, rxjs_1.of)({
            user_name: createUserDto.user_name,
            email: createUserDto.email,
            password: createUserDto.password,
            role: createUserDto.role
        });
    }
    loginUserDtoToEntity(loginUserDto) {
        return (0, rxjs_1.of)({
            email: loginUserDto.email,
            password: loginUserDto.password
        });
    }
};
UserHelperService = __decorate([
    (0, common_1.Injectable)()
], UserHelperService);
exports.UserHelperService = UserHelperService;
//# sourceMappingURL=user-helper.service.js.map