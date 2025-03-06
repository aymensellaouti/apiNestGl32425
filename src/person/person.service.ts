import { Injectable } from '@nestjs/common';
import { AddPersonDto } from './dto/add-person.dto';

@Injectable()
export class PersonService {
  create(addPersonDto: AddPersonDto) {
    throw new Error('Method not implemented.');
  }

  update(id: string, updatePerson: any) {
    throw new Error('Method not implemented.');
  }
}
