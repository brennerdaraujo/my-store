import { Router } from 'express';

import { GetCategoriesService } from '../services/GetCategoriesService';

const categoriesAdminRoutes = Router();

categoriesAdminRoutes.get('/', async (req, res) => {
  const getCategoriesService = new GetCategoriesService();

  const categories = await getCategoriesService.execute();

  return res.json(categories);
});

export { categoriesAdminRoutes };
