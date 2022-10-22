import cors from "cors";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: 'before' })
export class CORsMiddleware implements ExpressMiddlewareInterface {
  public use(request: any, response: any, next?: (err?: any) => any): any {
    return cors()(request, response, next);
  }
}