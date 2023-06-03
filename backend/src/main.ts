import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigurationUtil } from './utils/configuration.util';

async function bootstrap() {
  const appOptions: NestApplicationOptions = {
    cors: true,
  };

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    appOptions,
  );

  await app.listen(ConfigurationUtil.getPort());
}
bootstrap();
