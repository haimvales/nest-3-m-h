

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { jwtConstants } from './constants';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getRequest<Response>();

    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }
    console.log(authHeader)
    const secret = jwtConstants.secret
    console.log(secret)
    const token = authHeader.split('"')[1];
    console.log(token)
    if (!token) {
      throw new UnauthorizedException('Invalid token format');
    }

    try {

      // const a = await this.jwtService.verify
      console.log(this.jwtService.verify)
      const payload = this.jwtService.verify(token,{secret:secret});
      console.log(payload)
      request['user'] = payload;
      // response.json({payload});
      response.json{'w':'w'};
      return true

    } catch (err) {
      console.log(err)
      throw new UnauthorizedException('Token invalid or expired');
    }
  }
}