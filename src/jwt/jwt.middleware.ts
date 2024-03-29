import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from './jwt.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersServices: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers['x-jwt']);
    if ('x-jwt' in req.headers) {
      const token = req.headers['x-jwt'];

      try {
        const decoded = this.jwtService.verify(token.toString());
        if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
          const user = await this.usersServices.fundById(decoded['id']);

          console.log(user);

          req['user'] = user;
        }
      } catch (error) {}
    }
    next();
  }
}
