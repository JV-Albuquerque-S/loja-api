import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosEuropaService } from './produtos-europa.service';

describe('ProdutosEuropaService', () => {
  let service: ProdutosEuropaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosEuropaService],
    }).compile();

    service = module.get<ProdutosEuropaService>(ProdutosEuropaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
