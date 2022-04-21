import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { ContactSheet } from './model/contactsheet.entity';
import { ContactSheetI } from './model/contactsheet.interface';
export declare class ContactsheetService {
    private readonly contactRepository;
    constructor(contactRepository: Repository<ContactSheet>);
    createNewContact(newContact: ContactSheetI): Observable<ContactSheetI>;
    findAllContacts(): Observable<ContactSheetI[]>;
    findContactById(id: number): Observable<any>;
    deleteContactById(id: number): Observable<any>;
    updateContactById(id: number, contact: ContactSheetI): Observable<ContactSheetI>;
}
