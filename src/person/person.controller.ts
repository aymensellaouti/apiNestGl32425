import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Version,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { AddPersonDto } from './dto/add-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonEntity } from './person/person.entity';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  @Version(['1', '3'])
  witchVersion1() {
    return 'specific version';
  }
  @Get()
  witchVersion2() {
    return this.personService.find();
  }
  @Post()
  onPost(@Body() addPersonDto: AddPersonDto): Promise<PersonEntity> {
    return this.personService.create(addPersonDto);
  }
  @Patch(':id')
  onPatch(@Body() updatePerson: UpdatePersonDto, @Param('id') id: string) {
    return this.personService.update(id, updatePerson);
  }
}
