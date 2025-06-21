import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //Não seguro!
  //Só para garantir que qualquer pessoa que rodar esse
  //código localmente vai conseguir usar, independente
  //da porta do front
  await app.listen(process.env.BACKEND_PORT ?? 3000, () =>
    console.info(`api is working on port ${process.env.BACKEND_PORT}`),
  );
}
void bootstrap();
