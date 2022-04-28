
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { ContactsheetModule } from './contactsheet/contactsheet.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContactSheet } from './contactsheet/model/contactsheet.entity';

import { HttpErrorFilter } from './helper/http-error.filter';
import { LoggingInterceptor } from './helper/logging.interceptor';
import { User } from './user/models/user.entity';

const dotenv = require('dotenv');
dotenv.config();

//console.log(process.env.DB_HOST);
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
      //entities: [__dirname + '/../**/*.entity.{js,ts}'],
      entities: [ContactSheet,User],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ContactsheetModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
