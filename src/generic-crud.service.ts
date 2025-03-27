import { NotFoundException } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { CrudInterface } from './crud.interface';

export abstract class GenericCrud<Entity> implements CrudInterface<Entity> {
  constructor(private repository: Repository<Entity>) {}

  find(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return this.repository.find(options);
  }

  create(addEntity): Promise<Entity> {
    return this.repository.save(addEntity);
  }
  async update(id, updateEntityDto) {
    const newPerson = await this.repository.preload({
      id,
      ...updateEntityDto,
    });
    if (!newPerson) {
      throw new NotFoundException('entity innexistante');
    }
    return this.repository.save(newPerson);
  }
}
