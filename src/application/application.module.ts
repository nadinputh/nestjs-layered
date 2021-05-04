import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CoreModule } from '../core/core.module';
import { AppController } from './controller/app.controller';
import { RequestIdInterceptor } from './interceptor/request-id.interceptor';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

@Module({
  imports: [CoreModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestIdInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  controllers: [AppController],
})
export class ApplicationModule {}
