/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (token !== `Bearer ${process.env.TOKEN}`) {
      console.log(token, process.env.TOKEN);
      res.status(401).json({ message: 'Unauthorized' });
    } else {
      next();
    }
  }
}
