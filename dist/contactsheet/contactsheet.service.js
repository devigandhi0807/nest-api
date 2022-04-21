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
exports.ContactsheetService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contactsheet_entity_1 = require("./model/contactsheet.entity");
let ContactsheetService = class ContactsheetService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    createNewContact(newContact) {
        const contact = this.contactRepository.create(newContact);
        return (0, rxjs_1.from)(this.contactRepository.save(contact));
    }
    findAllContacts() {
        return (0, rxjs_1.from)(this.contactRepository.find());
    }
    findContactById(id) {
        return (0, rxjs_1.from)(this.contactRepository.findOne({ where: { id: id } })).pipe((0, operators_1.map)((contact) => {
            if (!contact) {
                throw new common_1.HttpException('Contact not found', common_1.HttpStatus.NOT_FOUND);
            }
            return contact;
        }));
    }
    deleteContactById(id) {
        return (0, rxjs_1.from)(this.contactRepository.delete(id));
    }
    updateContactById(id, contact) {
        return (0, rxjs_1.from)(this.contactRepository.update(id, contact)).pipe((0, operators_1.switchMap)(() => this.findContactById(id)));
    }
};
ContactsheetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contactsheet_entity_1.ContactSheet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContactsheetService);
exports.ContactsheetService = ContactsheetService;
//# sourceMappingURL=contactsheet.service.js.map