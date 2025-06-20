import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProdutosEuropaService } from './produtos-europa.service';
import { ProdutosEuropaController } from './produtos-europa.controller';

@Module({
  controllers: [ProdutosEuropaController],
  providers: [ProdutosEuropaService],
  imports: [HttpModule],
})
export class ProdutosEuropaModule {}
