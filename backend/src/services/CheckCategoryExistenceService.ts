import { Category } from '../entities/Category';
import { AppError } from '../errors/AppError';
import { CategoryRepository } from '../repositories/CategoryRepository';

class CheckCategoryExistenceService {
  async execute(id: string): Promise<Category> {
    const categoryRepository = new CategoryRepository();

    if (!id) {
      throw new AppError('Categoria não indicada!');
    }

    const categoryExists = await categoryRepository.findById(id);

    if (!categoryExists) {
      throw new AppError('Categoria não encontrada!', 404);
    }

    return categoryExists;
  }
}

export { CheckCategoryExistenceService };
