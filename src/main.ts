import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as path from "path";

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '../uploads'));
  app.useStaticAssets(join(__dirname, '../uploadMahasiswa'));

  await app.listen(port);
  Logger.log(`jalan di localhost:${port}`, 'Runing Port');
}
bootstrap();
