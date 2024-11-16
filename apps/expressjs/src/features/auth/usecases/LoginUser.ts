import { injectable } from 'inversify';
import { LoginUserDTO } from '../dto/LoginUserDTO';
import 'reflect-metadata';
import { generateToken } from '@expressjs/security';

@injectable()
export class LoginUser {
  async execute(command: LoginUserDTO): Promise<{ message: string, token: string }> {
    return {
        message: 'Lets do our work',
        token: generateToken({}).token,
    };
  }
}
