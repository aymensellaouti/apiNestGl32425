import {
  Inject,
  Injectable,
  NotFoundException,
  Optional,
} from '@nestjs/common';
import { Entity, FindManyOptions, Repository } from 'typeorm';
import { CrudInterface } from './crud.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class GenericCrud<Entity> implements CrudInterface<Entity> {
  constructor(private repository: Repository<Entity>, private eventSuffix: string = 'Entity') {}

  @Inject(EventEmitter2) eventEmitter: EventEmitter2;

  find(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return this.repository.find(options);
  }

  async create(addEntity): Promise<Entity> {
    const newEntity = await this.repository.save(addEntity);
    console.log('Emmiting');
    
    console.log(`add ${Entity.constructor.name}}`);
    // Haw kol ma tssir ajout fel DB on va déclenché un event add entityName ou bech n7otou fih comme
    // payload el entity eli tzadet  
    this.eventEmitter.emit(`add ${this.eventSuffix}`, { entity: newEntity });
    return newEntity;
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
