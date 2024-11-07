import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppInterceptor } from './app.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appInterceptor = app.get<AppInterceptor>(AppInterceptor);
  app.useGlobalInterceptors(appInterceptor);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
