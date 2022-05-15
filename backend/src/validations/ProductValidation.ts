import { AppError } from '../errors/AppError';

interface IProduct {
  name: string;
  base64_img: string;
  category_id: string;
  description: string;
  stock: number;
  status: boolean;
  promotional_price: number;
  normal_price: number;
}

interface IGetProducts {
  skip: number;
  limit: number;
  filter: string;
}

export class ProductValidation {
  validateOnCreateOrUpdate(request: any): IProduct {
    const product = {
      name: request.name || '',
      base64_img: (request.base64_img || '').split(';base64,').pop(),
      category_id: request.category_id || '',
      description: request.description || '',
      stock: parseInt(request.stock, 10) || 0,
      status: !!request.status,
      promotional_price: parseFloat(request.promotional_price) || 0,
      normal_price: parseFloat(request.normal_price) || 0
    };

    if (!product.name) {
      throw new AppError('Nome não indicado!');
    }

    if (product.name.length > 150) {
      throw new AppError('Nome não pode ter mais que 150 caracteres!');
    }

    if (!product.base64_img) {
      throw new AppError('Imagem não indicada!');
    }

    // eslint-disable-next-line no-nested-ternary
    const y = product.base64_img.endsWith('==')
      ? 2
      : product.base64_img.endsWith('=')
      ? 1
      : 0;

    const base64Size = product.base64_img.length * (3 / 4) - y;

    if (base64Size > 2000000) {
      throw new AppError('Imagem deve ter no máximo 2Mb!');
    }

    if (!product.category_id) {
      throw new AppError('Categoria não indicada!');
    }

    if (!product.description) {
      throw new AppError('Descrição não indicada!');
    }

    if (product.description.length > 2000) {
      throw new AppError('Descrição não pode ter mais que 2000 caracteres!');
    }

    if (product.stock < 0) {
      throw new AppError('Estoque não pode ser menor que 0!');
    }

    if (product.promotional_price < 0) {
      throw new AppError('Preço promocional não pode ser menor que 0!');
    }

    if (product.normal_price < 0) {
      throw new AppError('Preço normal não pode ser menor que 0!');
    }

    if (product.promotional_price >= product.normal_price) {
      throw new AppError('Preço promocional deve ser menor que preço normal!');
    }

    return product;
  }

  validateOnGetProducts(request: any): IGetProducts {
    const params = {
      skip: parseInt(request.skip, 10) || 0,
      limit: parseInt(request.limit, 10) || 0,
      filter: request.filter || ''
    };

    if (params.limit < 0) {
      throw new AppError('Limite inválido!');
    }

    if (params.skip < 0) {
      throw new AppError('Página inválida!');
    }

    if (params.skip > 0 && params.limit <= 0) {
      throw new AppError('Limite não indicado!');
    }

    return params;
  }
}
