import { Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Invoice } from '../models';
import { Controller, Get, Req, Res } from 'routing-controllers';

@Controller()
export class IndexController {
@Get('/')
  async getApi(@Req() request: any, @Res() response: Response) {
    return response.send('Application is live...');
  }
}