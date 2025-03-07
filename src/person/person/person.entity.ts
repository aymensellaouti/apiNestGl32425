import { Version } from '@nestjs/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity('person')
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({})
  name: string;
  @Column({})
  age: number;
  @CreateDateColumn({ update: false })
  created_at: Date;
  @UpdateDateColumn({ update: false })
  updated_at: Date;
  @DeleteDateColumn({ update: false })
  deleted_at: Date;
  @VersionColumn()
  version: number;
}
