import { Observable } from 'rxjs';
import { ContactsheetService } from './contactsheet.service';
import { ContactSheetI } from './model/contactsheet.interface';
import { ContactSheetDto } from './model/dto/contactsheet.dto';
export declare class ContactsheetController {
    private contactService;
    constructor(contactService: ContactsheetService);
    addContact(contactSheetDto: ContactSheetDto): Observable<ContactSheetI>;
    getContactById(id: number): Observable<any>;
    getAllContacts(): Observable<any>;
    removeContactById(id: number): Observable<any>;
    editContactById(id: number, contact: ContactSheetDto): Observable<ContactSheetI>;
}
