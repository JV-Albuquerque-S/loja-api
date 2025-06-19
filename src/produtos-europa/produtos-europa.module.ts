import { Module } from '@nestjs/common';
import { ProdutosEuropaService } from './produtos-europa.service';
import { ProdutosEuropaController } from './produtos-europa.controller';

@Module({
  controllers: [ProdutosEuropaController],
  providers: [ProdutosEuropaService],
})
export class ProdutosEuropaModule {}
