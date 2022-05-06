import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactSheet } from './model/contactsheet.entity';
import { ContactSheetI } from './model/contactsheet.interface';

@Injectable()
export class ContactsheetService {
  constructor(
    // @Inject(CONTACTSHEET_REPOSITORY) private readonly contactRepository:Repository<ContactSheet>
    @InjectRepository(ContactSheet)
    private readonly contactRepository: Repository<ContactSheet>,
  ) {}
  createNewContact(newContact: ContactSheetI): Observable<ContactSheetI> {
    const contact = this.contactRepository.create(newContact);
    return from(this.contactRepository.save(contact));
  }
  findAllContacts(): Observable<ContactSheetI[]> {
    return from(this.contactRepository.find());
  }
  findContactById(id: number): Observable<any> {
    return from(this.contactRepository.findOne({ where: { id: id } })).pipe(
      map((contact: ContactSheetI) => {
        if (!contact) {
          throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
        }
        return contact;
      }),
    );
  }
  deleteContactById(id: number): Observable<any> {
    return from(this.contactRepository.delete(id));
  }
  updateContactById(
    id: number,
    contact: ContactSheetI,
  ): Observable<ContactSheetI> {
    return from(this.contactRepository.update(id, contact)).pipe(
      switchMap(() => this.findContactById(id)),
    );
  }
}
