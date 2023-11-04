import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const ap = await NestFactory.create<NestExpressApplication>(AppModule);
 ap.useStaticAssets(join(__dirname, '..','public'));
  await app.listen(3000);
  await ap.listen(3001);
}
bootstrap();
