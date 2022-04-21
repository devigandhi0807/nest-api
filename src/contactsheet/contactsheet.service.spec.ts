import { Test, TestingModule } from '@nestjs/testing';
import { ContactsheetService } from './contactsheet.service';

describe('ContactsheetService', () => {
  let service: ContactsheetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsheetService],
    }).compile();

    service = module.get<ContactsheetService>(ContactsheetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
