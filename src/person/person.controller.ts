import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { AddPersonDto } from './dto/add-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
  @Post()
  onPost(@Body() addPersonDto: AddPersonDto) {
    return this.personService.create(addPersonDto);
  }
  @Patch(':id')
  onPatch(@Body() updatePerson: UpdatePersonDto, @Param('id') id: string) {
    return this.personService.update(id, updatePerson);
  }
}
