import { ExecutionContext, CallHandler, Injectable } from '@nestjs/common';
import { tap } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class AppInterceptor {
  constructor(private readonly appService: AppService) {}

  intercept(_: ExecutionContext, next: CallHandler<any>) {
    console.log('In interceptor');

    this.appService.setLocalStore();
    return next.handle().pipe(tap(() => this.appService.printLocalStore()));
  }
}
