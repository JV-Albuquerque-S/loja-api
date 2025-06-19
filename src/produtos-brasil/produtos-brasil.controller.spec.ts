import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosBrasilController } from './produtos-brasil.controller';
import { ProdutosBrasilService } from './produtos-brasil.service';

describe('ProdutosBrasilController', () => {
  let controller: ProdutosBrasilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosBrasilController],
      providers: [ProdutosBrasilService],
    }).compile();

    controller = module.get<ProdutosBrasilController>(ProdutosBrasilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
