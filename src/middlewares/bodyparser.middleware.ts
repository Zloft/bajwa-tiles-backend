import bodyParser from 'body-parser';
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: 'before' })
export class BodyParserMiddleware implements ExpressMiddlewareInterface {
  public use(request: any, response: any, next?: (err?: any) => any): any {
    return bodyParser.json()(request, response, next);
  }
}