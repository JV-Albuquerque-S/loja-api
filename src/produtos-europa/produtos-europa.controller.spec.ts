import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosEuropaController } from './produtos-europa.controller';
import { ProdutosEuropaService } from './produtos-europa.service';

describe('ProdutosEuropaController', () => {
  let controller: ProdutosEuropaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosEuropaController],
      providers: [ProdutosEuropaService],
    }).compile();

    controller = module.get<ProdutosEuropaController>(ProdutosEuropaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
