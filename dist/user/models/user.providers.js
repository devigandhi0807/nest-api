"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const user_entity_1 = require("./user.entity");
exports.userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (ds) => ds.getRepository(user_entity_1.User),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=user.providers.js.map