import { Injectable } from '@nestjs/common';
import { AddPersonDto } from './dto/add-person.dto';

@Injectable()
export class PersonService {
  create(addPersonDto: AddPersonDto) {
    return { addPersonDto };
  }

  update(id: string, updatePerson: any) {
    return { id, updatePerson };
  }
}
