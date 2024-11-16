import { Container } from 'inversify';
import { AuthRoute } from './AuthRoute';
import { LoginUser, TYPES } from './usecases';
import { AuthController } from './AuthController';

// Dependency injection of Controller and usecases
function authInject(container: Container) {
  // Controller
  container.bind<AuthController>(TYPES.AuthController).to(AuthController);

  // Usecases
  container.bind<LoginUser>(TYPES.LoginUser).to(LoginUser);
}

export { authInject, AuthRoute };
