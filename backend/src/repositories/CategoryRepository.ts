import { Repository } from 'typeorm';

import appDataSource from '../database/ormconfig';
import { Category } from '../entities/Category';

class CategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = appDataSource.getRepository(Category);
  }

  async findById(id: string): Promise<Category | null> {
    const category = await this.repository.findOneBy({ id });

    return category;
  }

  async getAll(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }
}

export { CategoryRepository };
