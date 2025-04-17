import { Injectable, NotFoundException } from '@nestjs/common';
import { AddPersonDto } from './dto/add-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './person/person.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { UpdatePersonDto } from './dto/update-person.dto';
import { GenericCrud } from '../generic-crud.service';
import { qbDateInterval } from '../db/date-interval-db';

@Injectable()
export class PersonService extends GenericCrud<PersonEntity> {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
  ) {
    super(personRepository, 'Person');
  }
  /* find(options?: FindManyOptions<PersonEntity>) {
    return this.personRepository.find();
  } */

  findByCreationDate(startDate: Date, endDate: Date) {
    const qb = this.personRepository.createQueryBuilder('person');
    qbDateInterval(qb, 'created_at', startDate, endDate);
    return qb.getMany();
  }
}
