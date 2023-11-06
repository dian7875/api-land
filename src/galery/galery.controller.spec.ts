import { Test, TestingModule } from '@nestjs/testing';
import { GaleryController } from './galery.controller';
import { GaleryService } from './galery.service';

describe('GaleryController', () => {
  let controller: GaleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GaleryController],
      providers: [GaleryService],
    }).compile();

    controller = module.get<GaleryController>(GaleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
