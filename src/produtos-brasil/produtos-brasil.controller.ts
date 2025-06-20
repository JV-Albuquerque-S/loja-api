import { Controller, Get, Body, Param } from '@nestjs/common';
import { ProdutosBrasilService } from './produtos-brasil.service';

@Controller('produtos-brasil')
export class ProdutosBrasilController {
  constructor(private readonly produtosBrasilService: ProdutosBrasilService) {}

  @Get()
  findAll() {
    return this.produtosBrasilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosBrasilService.findOne(id);
  }
}
