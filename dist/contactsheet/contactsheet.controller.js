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
exports.ContactsheetController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const contactsheet_service_1 = require("./contactsheet.service");
const contactsheet_dto_1 = require("./model/dto/contactsheet.dto");
let ContactsheetController = class ContactsheetController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    addContact(contactSheetDto) {
        return this.contactService.createNewContact(contactSheetDto);
    }
    getContactById(id) {
        return this.contactService.findContactById(id);
    }
    getAllContacts() {
        return this.contactService.findAllContacts();
    }
    removeContactById(id) {
        return this.contactService.deleteContactById(id);
    }
    editContactById(id, contact) {
        return this.contactService.updateContactById(Number(id), contact);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contactsheet_dto_1.ContactSheetDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], ContactsheetController.prototype, "addContact", null);
__decorate([
    (0, common_1.Get)('/:contactId'),
    __param(0, (0, common_1.Param)('contactId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], ContactsheetController.prototype, "getContactById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ContactsheetController.prototype, "getAllContacts", null);
__decorate([
    (0, common_1.Delete)('/:cotactId'),
    __param(0, (0, common_1.Param)('cotactId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], ContactsheetController.prototype, "removeContactById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, contactsheet_dto_1.ContactSheetDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], ContactsheetController.prototype, "editContactById", null);
ContactsheetController = __decorate([
    (0, common_1.Controller)('contactsheet'),
    __metadata("design:paramtypes", [contactsheet_service_1.ContactsheetService])
], ContactsheetController);
exports.ContactsheetController = ContactsheetController;
//# sourceMappingURL=contactsheet.controller.js.map