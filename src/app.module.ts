
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DBModule } from './db/db.module';
import { ContactsheetModule } from './contactsheet/contactsheet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ContactSheet } from './contactsheet/model/contactsheet.entity';
import { Console } from 'console';
import { HttpErrorFilter } from './helper/http-error.filter';
import { LoggingInterceptor } from './helper/logging.interceptor';

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
      entities:[ContactSheet],
      synchronize: true,
    }),
   // UserModule,
   // DBModule,
    ContactsheetModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_FILTER,
    useClass: HttpErrorFilter,
  },{
    provide: APP_INTERCEPTOR,
    useClass:LoggingInterceptor
  }],

})
export class AppModule {}
