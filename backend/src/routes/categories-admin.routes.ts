import { Router } from 'express';

import { GetCategoriesService } from '../services/GetCategoriesService';

const categoriesAdminRoutes = Router();

categoriesAdminRoutes.get('/', async (req, res) => {
  /*
    #swagger.description = 'Busca todas as categorias'
    #swagger.tags = ['Categorias - Administrativo']
  */

  /*
    #swagger.responses[200] = {
      schema: [
        {
          "id": "d11e0f6d-327e-408a-ae95-ef6344e9cf75",
          "name": "Camisetas",
          "created_at": "2022-05-15T16:58:23.000Z",
          "updated_at": "2022-05-15T16:58:23.000Z",
          "deleted_at": null
        },
        {
          "id": "ef2ccbd4-572d-4509-a93a-8066e223b215",
          "name": "Chuteiras",
          "created_at": "2022-05-15T16:58:23.000Z",
          "updated_at": "2022-05-15T16:58:23.000Z",
          "deleted_at": null
        }
      ]
    }
  */

  const getCategoriesService = new GetCategoriesService();

  const categories = await getCategoriesService.execute();

  return res.json(categories);
});

export { categoriesAdminRoutes };
