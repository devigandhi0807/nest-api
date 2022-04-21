import { Module } from '@nestjs/common';
import { ContactsheetController } from './contactsheet.controller';
import { ContactsheetService } from './contactsheet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactSheet } from './model/contactsheet.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([ContactSheet]),

  ],
  //imports:[DBModule],
  controllers: [ContactsheetController],
  providers: [ContactsheetService]
})
export class ContactsheetModule {}
