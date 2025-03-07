import { Injectable, NotFoundException } from '@nestjs/common';
import { AddPersonDto } from './dto/add-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './person/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
  ) {}
  create(addPersonDto: AddPersonDto): Promise<PersonEntity> {
    return this.personRepository.save(addPersonDto);
  }

  async update(id: string, updatePerson: any) {
    const newPerson = await this.personRepository.preload({
      id,
      ...updatePerson,
    });
    if (!newPerson) {
      throw new NotFoundException('person innexistant');
    }
    return this.personRepository.save(newPerson);
  }
}
