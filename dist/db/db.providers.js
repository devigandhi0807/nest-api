"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbProviders = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const db_provide_constant_1 = require("./db-provide.constant");
const contactsheet_entity_1 = require("../contactsheet/model/contactsheet.entity");
exports.dbProviders = [
    {
        provide: db_provide_constant_1.DB_CONNECTION,
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            const dataSource = await new typeorm_1.DataSource({
                type: 'mysql',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USER'),
                password: configService.get('DB_PWD'),
                database: configService.get('DB_NAME'),
                entities: [contactsheet_entity_1.ContactSheet],
                synchronize: true,
            });
            dataSource.initialize()
                .then(() => {
                console.log("Data Source has been initialized!");
            })
                .catch((err) => {
                console.error("Error during Data Source initialization", err);
            });
        }
    },
];
//# sourceMappingURL=db.providers.js.map