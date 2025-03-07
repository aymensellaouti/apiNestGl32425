import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { RANDOM_STRING_PROVIDER } from './prividers/rand-string.provider';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './person/person/person.entity';
@Module({
  imports: [
    FirstModule,
    PersonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gl32425',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RANDOM_STRING_PROVIDER],
  exports: [],
})
export class AppModule {}
