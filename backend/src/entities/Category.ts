import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('tbl_categories')
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Category };
