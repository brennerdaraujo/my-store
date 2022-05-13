import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';
import { ProductValidation } from '../validations/ProductValidation';

interface IRequest {
  skip: any;
  limit: any;
}

class GetAvailableProductsService {
  async execute(
    request: IRequest
  ): Promise<{ products: Product[]; total: number }> {
    // Validate the params and if no errors occur, return the validated params
    const productValidation = new ProductValidation();
    const validated = productValidation.validateOnGetProducts(request);

    // Get available products
    const productRepository = new ProductRepository();
    const result = await productRepository.getAvailableProducts(validated);

    return result;
  }
}

export { GetAvailableProductsService };
