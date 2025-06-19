import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutosBrasilDto } from './create-produtos-brasil.dto';

export class UpdateProdutosBrasilDto extends PartialType(
  CreateProdutosBrasilDto,
) {}
