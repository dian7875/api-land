import { Test, TestingModule } from '@nestjs/testing';
import { InfoGeneralService } from './info-general.service';

describe('InfoGeneralService', () => {
  let service: InfoGeneralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoGeneralService],
    }).compile();

    service = module.get<InfoGeneralService>(InfoGeneralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
