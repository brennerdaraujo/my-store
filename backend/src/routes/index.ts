import express, { Request, Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import { publicDir } from '../consts';
import swaggerFile from '../swagger/swagger_output.json';
import { categoriesAdminRoutes } from './categories-admin.routes';
import { productsAdminRoutes } from './products-admin.routes';
import { productsRoutes } from './products.routes';

const routes = Router();

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
routes.use('/public', express.static(publicDir));
routes.use('/admin/products', productsAdminRoutes);
routes.use('/admin/categories', categoriesAdminRoutes);
routes.use('/products', productsRoutes);

export { routes };
