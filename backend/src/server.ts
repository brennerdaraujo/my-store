import express, { Request, Response, NextFunction } from 'express';
// import 'express-async-errors';

// import './database';

// import { AppError } from './errors/AppError';
// import { routes } from './routes';

const app = express();

app.use(express.json());
// app.use(routes);
/* app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  console.log(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
}); */

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
