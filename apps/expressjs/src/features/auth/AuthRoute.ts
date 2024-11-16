import { Router } from 'express';
import { AuthController } from './AuthController';
import { LoginUser } from './usecases';

export class AuthRoute {
  public router: Router;
  public authController: AuthController;

  private versionV1 = 'v1';

  constructor() {
    this.router = Router();
    this.authController = new AuthController();

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(`/${this.versionV1}/login`, this.authController.login);
  }
}
