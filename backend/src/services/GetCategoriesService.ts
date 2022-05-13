import { Category } from '../entities/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';

class GetCategoriesService {
  async execute(): Promise<Category[]> {
    // Get categories
    const categoryRepository = new CategoryRepository();
    const categories = await categoryRepository.getAll();

    return categories;
  }
}

export { GetCategoriesService };
