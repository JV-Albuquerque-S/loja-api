import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ProdutoBrasil } from './dto/produto-brasil.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProdutosBrasilService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<ProdutoBrasil[]> {
    const url =
      'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider';
    const response: AxiosResponse<ProdutoBrasil[]> = await firstValueFrom(
      this.httpService.get(url),
    );
    return response.data;
  }

  async findOne(id: string): Promise<ProdutoBrasil> {
    const url = `http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider/${id}`;
    const response: AxiosResponse<ProdutoBrasil> = await firstValueFrom(
      this.httpService.get(url),
    );
    return response.data;
  }
}
