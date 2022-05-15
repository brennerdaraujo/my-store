import { Router } from 'express';

import { CreateProductService } from '../services/CreateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { GetProductsService } from '../services/GetProductsService';
import { UpdateProductService } from '../services/UpdateProductService';

const productsAdminRoutes = Router();

productsAdminRoutes.post('/', async (req, res) => {
  const {
    name,
    base64_img,
    category_id,
    description,
    stock,
    status,
    promotional_price,
    normal_price
  } = req.body;

  const createProductService = new CreateProductService();

  const product = await createProductService.execute({
    name,
    base64_img,
    category_id,
    description,
    stock,
    status,
    promotional_price,
    normal_price
  });

  return res.json(product);
});

productsAdminRoutes.put('/:id', async (req, res) => {
  const {
    name,
    base64_img,
    category_id,
    description,
    stock,
    status,
    promotional_price,
    normal_price
  } = req.body;
  const { id } = req.params;

  const updateProductService = new UpdateProductService();

  await updateProductService.execute({
    name,
    base64_img,
    category_id,
    description,
    stock,
    status,
    promotional_price,
    normal_price,
    id
  });

  return res.send();
});

productsAdminRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deleteProductService = new DeleteProductService();

  await deleteProductService.execute(id);

  return res.send();
});

productsAdminRoutes.get('/', async (req, res) => {
  const { skip, limit, filter } = req.query;

  const getProductsService = new GetProductsService();

  const result = await getProductsService.execute({ skip, limit, filter });

  return res.json(result);
});

export { productsAdminRoutes };
