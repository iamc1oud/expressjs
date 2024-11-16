import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { LoginUserDTO } from './dto/LoginUserDTO';
import { LoginUser, TYPES } from './usecases';
import { container } from '../../inversify.config';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;

    // Validate payload
    var payload = new LoginUserDTO();
    payload.username = username;
    payload.password = password;

    const errors = await validate(payload);

    if (errors.length) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: errors,
      });
    }

    var response = await container
      .get<LoginUser>(TYPES.LoginUser)
      .execute(payload);

    return res.status(StatusCodes.OK).json({
      data: response,
    });
  }
}
