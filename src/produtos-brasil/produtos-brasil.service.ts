import { Injectable } from '@nestjs/common';
import { CreateProdutosBrasilDto } from './dto/create-produtos-brasil.dto';
import { UpdateProdutosBrasilDto } from './dto/update-produtos-brasil.dto';

@Injectable()
export class ProdutosBrasilService {
  create(createProdutosBrasilDto: CreateProdutosBrasilDto) {
    return 'This action adds a new produtosBrasil';
  }

  findAll() {
    return `This action returns all produtosBrasil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtosBrasil`;
  }

  update(id: number, updateProdutosBrasilDto: UpdateProdutosBrasilDto) {
    return `This action updates a #${id} produtosBrasil`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtosBrasil`;
  }
}
