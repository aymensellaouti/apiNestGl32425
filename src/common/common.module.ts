import { Global, Module } from '@nestjs/common';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';
import { GenericCrud } from '../generic-crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [EventEmitterModule.forRoot(), TypeOrmModule.forFeature()],
  /* providers: [GenericCrud], */
  exports: [EventEmitterModule],
})
export class CommonModule {}
