import express from 'express';
import 'express-async-errors';

import './database';

import handleErrors from './middlewares/handleErrors';
import { handlePublicDir } from './middlewares/handlePublicDir';
import { routes } from './routes';

// Check if public directory exists and if not, create it
handlePublicDir();

const app = express();

app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(express.json({ limit: '5mb' }));
app.use(routes);
app.use(handleErrors);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
