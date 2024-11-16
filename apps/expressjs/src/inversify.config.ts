import { Container } from 'inversify';
import { authInject } from './features/auth';

const container = new Container();

authInject(container);

export { container };
