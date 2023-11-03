import { Test, TestingModule } from '@nestjs/testing';
import { InfoGeneralController } from './info-general.controller';
import { InfoGeneralService } from './info-general.service';

describe('InfoGeneralController', () => {
  let controller: InfoGeneralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoGeneralController],
      providers: [InfoGeneralService],
    }).compile();

    controller = module.get<InfoGeneralController>(InfoGeneralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
