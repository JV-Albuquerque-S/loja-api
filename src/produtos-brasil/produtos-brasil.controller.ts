import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdutosBrasilService } from './produtos-brasil.service';
import { CreateProdutosBrasilDto } from './dto/create-produtos-brasil.dto';
import { UpdateProdutosBrasilDto } from './dto/update-produtos-brasil.dto';

@Controller('produtos-brasil')
export class ProdutosBrasilController {
  constructor(private readonly produtosBrasilService: ProdutosBrasilService) {}

  @Post()
  create(@Body() createProdutosBrasilDto: CreateProdutosBrasilDto) {
    return this.produtosBrasilService.create(createProdutosBrasilDto);
  }

  @Get()
  findAll() {
    return this.produtosBrasilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosBrasilService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProdutosBrasilDto: UpdateProdutosBrasilDto,
  ) {
    return this.produtosBrasilService.update(+id, updateProdutosBrasilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosBrasilService.remove(+id);
  }
}
