import { Module } from '@nestjs/common';
import { DatabaseModule } from '../io/database.module';
import { AppService } from './service/app.service';

@Module({
  imports: [DatabaseModule],
  providers: [AppService],
  exports: [AppService],
})
export class CoreModule {}
