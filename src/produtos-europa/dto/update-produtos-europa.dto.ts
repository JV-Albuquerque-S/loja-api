import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutosEuropaDto } from './create-produtos-europa.dto';

export class UpdateProdutosEuropaDto extends PartialType(
  CreateProdutosEuropaDto,
) {}
