import { Module } from '@nestjs/common';
import { ProdutosBrasilService } from './produtos-brasil.service';
import { ProdutosBrasilController } from './produtos-brasil.controller';

@Module({
  controllers: [ProdutosBrasilController],
  providers: [ProdutosBrasilService],
})
export class ProdutosBrasilModule {}
