import { Injectable } from '@nestjs/common';
import { CreateProdutosEuropaDto } from './dto/create-produtos-europa.dto';
import { UpdateProdutosEuropaDto } from './dto/update-produtos-europa.dto';

@Injectable()
export class ProdutosEuropaService {
  create(createProdutosEuropaDto: CreateProdutosEuropaDto) {
    return 'This action adds a new produtosEuropa';
  }

  findAll() {
    return `This action returns all produtosEuropa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtosEuropa`;
  }

  update(id: number, updateProdutosEuropaDto: UpdateProdutosEuropaDto) {
    return `This action updates a #${id} produtosEuropa`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtosEuropa`;
  }
}
