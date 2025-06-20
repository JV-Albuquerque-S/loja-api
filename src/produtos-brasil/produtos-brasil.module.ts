import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProdutosBrasilService } from './produtos-brasil.service';
import { ProdutosBrasilController } from './produtos-brasil.controller';

@Module({
  controllers: [ProdutosBrasilController],
  providers: [ProdutosBrasilService],
  imports: [HttpModule],
})
export class ProdutosBrasilModule {}
