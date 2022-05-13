import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Category } from './Category';

@Entity('tbl_products')
class Product {
  @PrimaryColumn()
  id?: string;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  name: string;

  @Column()
  img_path: string;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column()
  status: boolean;

  @Column()
  normal_price: number;

  @Column()
  promotional_price: number;

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

export { Product };
