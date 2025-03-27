import { SelectQueryBuilder } from 'typeorm';

export function qbDateInterval<Entity>(
  qb: SelectQueryBuilder<Entity>,
  dateName: keyof Entity,
  starDate?: Date,
  endDate?: Date,
) {
  if (starDate) {
    qb.andWhere(`${dateName.toString()} >= :startDate`, { starDate });
  }
  if (endDate) {
    qb.andWhere(`${dateName.toString()} >= :endDate`, { endDate });
  }
}
