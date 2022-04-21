"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsheetModule = void 0;
const common_1 = require("@nestjs/common");
const contactsheet_controller_1 = require("./contactsheet.controller");
const contactsheet_service_1 = require("./contactsheet.service");
const typeorm_1 = require("@nestjs/typeorm");
const contactsheet_entity_1 = require("./model/contactsheet.entity");
let ContactsheetModule = class ContactsheetModule {
};
ContactsheetModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contactsheet_entity_1.ContactSheet]),
        ],
        controllers: [contactsheet_controller_1.ContactsheetController],
        providers: [contactsheet_service_1.ContactsheetService]
    })
], ContactsheetModule);
exports.ContactsheetModule = ContactsheetModule;
//# sourceMappingURL=contactsheet.module.js.map