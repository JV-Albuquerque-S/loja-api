import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdutosEuropaService } from './produtos-europa.service';
import { CreateProdutosEuropaDto } from './dto/create-produtos-europa.dto';
import { UpdateProdutosEuropaDto } from './dto/update-produtos-europa.dto';

@Controller('produtos-europa')
export class ProdutosEuropaController {
  constructor(private readonly produtosEuropaService: ProdutosEuropaService) {}

  @Post()
  create(@Body() createProdutosEuropaDto: CreateProdutosEuropaDto) {
    return this.produtosEuropaService.create(createProdutosEuropaDto);
  }

  @Get()
  findAll() {
    return this.produtosEuropaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosEuropaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProdutosEuropaDto: UpdateProdutosEuropaDto,
  ) {
    return this.produtosEuropaService.update(+id, updateProdutosEuropaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosEuropaService.remove(+id);
  }
}
