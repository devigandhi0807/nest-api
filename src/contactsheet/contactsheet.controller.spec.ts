import { Test, TestingModule } from '@nestjs/testing';
import { ContactsheetController } from './contactsheet.controller';

describe('ContactsheetController', () => {
  let controller: ContactsheetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsheetController],
    }).compile();

    controller = module.get<ContactsheetController>(ContactsheetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
