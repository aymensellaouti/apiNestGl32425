import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Sse,
  Version,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { AddPersonDto } from './dto/add-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonEntity } from './person/person.entity';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { fromEvent, map, Observable } from 'rxjs';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService, private eventEmitter: EventEmitter2) {}

  @Get()
  @Version(['1', '3'])
  witchVersion1() {
    return 'specific version';
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    console.log('Calling SSE');
    
    return fromEvent(this.eventEmitter, `add Person`).pipe(
      map((payload) => {
        console.log('From SSE');
        console.log({ payload });
        return new MessageEvent('new-person', { data: payload });
      }),
    );
  }

  @Get()
  witchVersion2() {
    return this.personService.find();
  }
  @Post()
  onPost(@Body() addPersonDto: AddPersonDto): Promise<PersonEntity> {
    console.log('Adding Person');
    
    return this.personService.create(addPersonDto);
  }
  @Patch(':id')
  onPatch(@Body() updatePerson: UpdatePersonDto, @Param('id') id: string) {
    return this.personService.update(id, updatePerson);
  }

  @OnEvent(`add Person`) 
  async handleCvAdded(payload: any) {
    console.log(`Listen to Person`, payload);
    
    // Do what you want with the payload);
  }

}
