import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosBrasilService } from './produtos-brasil.service';

describe('ProdutosBrasilService', () => {
  let service: ProdutosBrasilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosBrasilService],
    }).compile();

    service = module.get<ProdutosBrasilService>(ProdutosBrasilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
