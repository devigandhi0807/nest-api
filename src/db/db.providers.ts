import "reflect-metadata";

import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DB_CONNECTION } from './db-provide.constant';
import { ContactSheet } from 'src/contactsheet/model/contactsheet.entity';
export const dbProviders = [
  {
    provide: DB_CONNECTION,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) =>{
      const dataSource = await new DataSource({
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PWD'),
      database: configService.get('DB_NAME'),
      entities: [ContactSheet],
      synchronize: true,
    })
    dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
  }
  },
  // {
  //   provide: DB_CONNECTION,
  //   inject: [ConfigService],
  //   useFactory: async (configService: ConfigService) => {
  //     const sequelize = await new Sequelize({
  //       dialect: 'mysql',
  //       host: configService.get('DB_HOST'),
  //      port: configService.get('DB_PORT'),
  //      username: configService.get('DB_USER'),
  //      password: configService.get('DB_PWD'),
  //      database: configService.get('DB_NAME'),
  //     });
  //      await sequelize.addModels([ContactSheet]);
  //     await sequelize.sync();
  //     return sequelize;
  //   },
  //},

];

