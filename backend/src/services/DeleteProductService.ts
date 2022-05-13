import { ProductRepository } from '../repositories/ProductRepository';
import { CheckProductExistenceService } from './CheckProductExistenceService';

class DeleteProductService {
  async execute(id: string): Promise<void> {
    // Check if the product exists
    const checkProductExistenceService = new CheckProductExistenceService();
    await checkProductExistenceService.execute(id);

    // Delete the product
    const productRepository = new ProductRepository();
    await productRepository.delete(id);
  }
}

export { DeleteProductService };
