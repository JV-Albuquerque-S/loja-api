import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ProdutoEuropa } from './dto/produto-europa.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProdutosEuropaService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<ProdutoEuropa[]> {
    const url =
      'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider';
    const response: AxiosResponse<ProdutoEuropa[]> = await firstValueFrom(
      this.httpService.get(url),
    );
    return response.data;
  }

  async findOne(id: string): Promise<ProdutoEuropa> {
    const url = `http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider/${id}`;
    const response: AxiosResponse<ProdutoEuropa> = await firstValueFrom(
      this.httpService.get(url),
    );
    return response.data;
  }
}
