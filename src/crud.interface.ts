import { FindManyOptions } from 'typeorm';

export interface CrudInterface<Entity> {
  find(options?: FindManyOptions<Entity>): Promise<Entity[]>;
  create(addEntity): Promise<Entity>;
  update(id, updateEntityDto);
}
