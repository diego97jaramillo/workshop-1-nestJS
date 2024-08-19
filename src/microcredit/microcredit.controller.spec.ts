import { Test, TestingModule } from '@nestjs/testing';
import { MicrocreditController } from './microcredit.controller';

describe('MicrocreditController', () => {
  let controller: MicrocreditController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicrocreditController],
    }).compile();

    controller = module.get<MicrocreditController>(MicrocreditController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
