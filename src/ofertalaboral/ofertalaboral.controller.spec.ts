import { Test, TestingModule } from '@nestjs/testing';
import { OfertalaboralController } from './ofertalaboral.controller';

describe('OfertalaboralController', () => {
  let controller: OfertalaboralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertalaboralController],
    }).compile();

    controller = module.get<OfertalaboralController>(OfertalaboralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
