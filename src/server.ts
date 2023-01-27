import cors from 'cors';
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';

import createDatabaseConnection from '@shared/database';
import { AppError } from '@shared/errors/AppError';
import { router } from '@shared/routes';

dotenv.config({ path: `${__dirname}/../.env` });

createDatabaseConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error: ${err.message}`,
  });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));