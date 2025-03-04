import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { RANDOM_STRING_PROVIDER } from './prividers/rand-string.provider';
@Module({
  imports: [FirstModule],
  controllers: [AppController],
  providers: [
    AppService,
    RANDOM_STRING_PROVIDER
  ],
  exports: [],
})
export class AppModule {}
