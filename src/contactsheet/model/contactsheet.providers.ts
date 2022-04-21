//import {initialize} from "typeorm";
import { CONTACTSHEET_REPOSITORY, DB_CONNECTION } from "src/db/db-provide.constant";
import { DataSource } from "typeorm";


import { ContactSheet } from "./contactsheet.entity";

export const contactProviders=[{
  provide:CONTACTSHEET_REPOSITORY,
  //useFactory: (ds:DataSource)=>ds.manager.getRepository(ContactSheet) ,
  inject:[DB_CONNECTION],

  useValue: ContactSheet
},];
