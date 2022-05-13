import { Product } from '../entities/Product';
import { AppError } from '../errors/AppError';
import { ProductRepository } from '../repositories/ProductRepository';

class CheckProductExistenceService {
  async execute(id: string): Promise<Product> {
    const productRepository = new ProductRepository();

    if (!id) {
      throw new AppError('Produto não indicado!');
    }

    const productExists = await productRepository.findById(id);

    if (!productExists) {
      throw new AppError('Produto não encontrado!', 404);
    }

    return productExists;
  }
}

export { CheckProductExistenceService };
