import { Controller, Get, Body, Param } from '@nestjs/common';
import { ProdutosEuropaService } from './produtos-europa.service';

@Controller('produtos-europa')
export class ProdutosEuropaController {
  constructor(private readonly produtosEuropaService: ProdutosEuropaService) {}

  @Get()
  findAll() {
    return this.produtosEuropaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosEuropaService.findOne(id);
  }
}
