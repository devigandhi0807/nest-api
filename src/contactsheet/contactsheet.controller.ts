import { Body, Controller, Delete, Get, Param, Post,Put,Res } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Response} from 'express';
import { ContactsheetService } from './contactsheet.service';
import { ContactSheetI } from './model/contactsheet.interface';
import { ContactSheetDto } from './model/dto/contactsheet.dto';

@Controller('contactsheet')
export class ContactsheetController {
  constructor(private contactService:ContactsheetService){}

  @Post()
  addContact(@Body()contactSheetDto:ContactSheetDto): Observable<ContactSheetI>{
    return this.contactService.createNewContact(contactSheetDto);
  }

  @Get('/:contactId')
  getContactById(@Param('contactId')id: number): Observable<any>{

    return this.contactService.findContactById(id);
  }
  @Get()
  getAllContacts(): Observable<ContactSheetI[]> {
    return this.contactService.findAllContacts();
  }
  @Delete('/:cotactId')
  //,@Res() res:Response
  removeContactById(@Param('cotactId') id: number): Observable<any> {
    //res.status(200).send({msg:`Contact id-${id} regarding Contact Deleted Successfully `});
      return this.contactService.deleteContactById(id);
  }
  @Put(':id')
    editContactById(@Param('id') id: number, @Body() contact: ContactSheetDto): Observable<ContactSheetI> {
        return this.contactService.updateContactById(Number(id), contact);
    }
}
