"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactProviders = void 0;
const db_provide_constant_1 = require("../../db/db-provide.constant");
const contactsheet_entity_1 = require("./contactsheet.entity");
exports.contactProviders = [{
        provide: db_provide_constant_1.CONTACTSHEET_REPOSITORY,
        inject: [db_provide_constant_1.DB_CONNECTION],
        useValue: contactsheet_entity_1.ContactSheet
    },];
//# sourceMappingURL=contactsheet.providers.js.map