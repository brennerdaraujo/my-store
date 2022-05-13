import { ProductRepository } from '../repositories/ProductRepository';
import { ProductValidation } from '../validations/ProductValidation';
import { CheckCategoryExistenceService } from './CheckCategoryExistenceService';
import { CheckProductExistenceService } from './CheckProductExistenceService';
import { RemoveProductImgService } from './RemoveProductImgService';
import { SaveProductImgService } from './SaveProductImgService';

interface IRequest {
  id: string;
  name: string;
  base64_img: string;
  category_id: string;
  description: string;
  stock: number;
  status: boolean;
  promotional_price: number;
  normal_price: number;
}

class UpdateProductService {
  async execute(request: IRequest): Promise<void> {
    // Validate the product and if no errors occur, return the validated product
    const productValidation = new ProductValidation();
    const validated = productValidation.validateOnCreateOrUpdate(request);

    // Check if the category exists
    const checkCategoryExistenceService = new CheckCategoryExistenceService();
    await checkCategoryExistenceService.execute(validated.category_id);

    // Check if the product exists
    const checkProductExistenceService = new CheckProductExistenceService();
    const oldProduct = await checkProductExistenceService.execute(request.id);

    // Remove old product image from the server
    const removeProductImgService = new RemoveProductImgService();
    await removeProductImgService.execute(oldProduct.img_path);

    // Save product image on the server and return the path
    const saveProductImgService = new SaveProductImgService();
    const img_path = await saveProductImgService.execute(validated.base64_img);

    // Update product
    const productRepository = new ProductRepository();
    await productRepository.update({
      ...validated,
      img_path,
      id: request.id
    });
  }
}

export { UpdateProductService };
