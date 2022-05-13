import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';
import { ProductValidation } from '../validations/ProductValidation';
import { CheckCategoryExistenceService } from './CheckCategoryExistenceService';
import { SaveProductImgService } from './SaveProductImgService';

interface IRequest {
  name: string;
  base64_img: string;
  category_id: string;
  description: string;
  stock: number;
  status: boolean;
  promotional_price: number;
  normal_price: number;
}

class CreateProductService {
  async execute(request: IRequest): Promise<Product> {
    // Validate the product and if no errors occur, return the validated product
    const productValidation = new ProductValidation();
    const validated = productValidation.validateOnCreateOrUpdate(request);

    // Check if the category exists
    const checkCategoryExistenceService = new CheckCategoryExistenceService();
    await checkCategoryExistenceService.execute(validated.category_id);

    // Save product image on the server and return the path
    const saveProductImgService = new SaveProductImgService();
    const img_path = await saveProductImgService.execute(validated.base64_img);

    // Create product
    const productRepository = new ProductRepository();
    const product = await productRepository.create({
      ...validated,
      img_path
    });

    return product;
  }
}

export { CreateProductService };
