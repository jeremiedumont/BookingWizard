import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const appOptions: NestApplicationOptions = {
    cors: true,
    // logger: ['error', 'warn'],
  };

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    appOptions,
  );

  await app.listen(config().port);
}
bootstrap();
