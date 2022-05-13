import { Request, Response, NextFunction } from 'express';

import { AppError } from '../errors/AppError';

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
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
};

export default handleErrors;
