import express, { Router } from 'express';

import { publicDir } from '../consts';
import { categoriesAdminRoutes } from './categories-admin.routes';
import { productsAdminRoutes } from './products-admin.routes';
import { productsRoutes } from './products.routes';

const routes = Router();

routes.use('/public', express.static(publicDir));
routes.use('/admin/products', productsAdminRoutes);
routes.use('/admin/categories', categoriesAdminRoutes);
routes.use('/products', productsRoutes);

export { routes };
