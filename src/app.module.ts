import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosBrasilModule } from './produtos-brasil/produtos-brasil.module';
import { ProdutosEuropaModule } from './produtos-europa/produtos-europa.module';

@Module({
  imports: [ProdutosBrasilModule, ProdutosEuropaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
