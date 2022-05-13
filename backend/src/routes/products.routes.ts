import { Router } from 'express';

import { GetAvailableProductsService } from '../services/GetAvailableProductsService';

const productsRoutes = Router();

productsRoutes.get('/', async (req, res) => {
  const { skip, limit } = req.query;

  const getAvailableProductsService = new GetAvailableProductsService();

  const result = await getAvailableProductsService.execute({ skip, limit });

  return res.json(result);
});

export { productsRoutes };
