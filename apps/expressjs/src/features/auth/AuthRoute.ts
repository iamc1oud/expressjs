import { Router } from 'express';
import { AuthController } from './AuthController';
import { LoginUser, TYPES } from './usecases';
import { container } from '../../inversify.config';

export class AuthRoute {
  public router: Router;
  public authController: AuthController;

  private versionV1 = 'v1';

  constructor() {
    this.router = Router();
    this.authController = container.get<AuthController>(TYPES.AuthController);

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(`/${this.versionV1}/login`, this.authController.login);
  }
}
