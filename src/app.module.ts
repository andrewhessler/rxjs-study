import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppInterceptor } from './app.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppInterceptor],
  exports: [AppService, AppInterceptor],
})
export class AppModule {}
