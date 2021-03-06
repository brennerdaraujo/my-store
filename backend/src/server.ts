import express from 'express';

import 'express-async-errors';
// eslint-disable-next-line import-helpers/order-imports
import { port } from './consts';

import './database';

import handleErrors from './middlewares/handleErrors';
import { handlePublicDir } from './middlewares/handlePublicDir';
import { setHeaders } from './middlewares/setHeaders';
import { routes } from './routes';

// Check if public directory exists and if not, create it
handlePublicDir();

const app = express();

app.use(setHeaders);
app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(express.json({ limit: '5mb' }));
app.use(routes);
app.use(handleErrors);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
