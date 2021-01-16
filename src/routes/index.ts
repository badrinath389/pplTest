import { RegisterRoutes } from './routes';
import { RegisterSwaggerRoutes } from './swaggerRouting';

// rename tsoa generated controller router function for clarity because we additionally have swagger routing
const RegisterControllerRoutes = RegisterRoutes;

export { RegisterControllerRoutes, RegisterSwaggerRoutes }