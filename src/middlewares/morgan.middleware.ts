import morgan from 'morgan';
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: 'before' })
export class MorganMiddleware implements ExpressMiddlewareInterface {
  public use(request: any, response: any, next?: (err?: any) => any): any {
    return morgan('dev')(request, response, next);
  }
}