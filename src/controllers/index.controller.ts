import { Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Invoice } from '../models';
import { Controller, Get, Req, Res } from 'routing-controllers';

@Controller()
export class IndexController {
@Get('/')
  async getApi(@Req() request: any, @Res() response: Response) {

    const invoice = await Invoice.create({
      id: uuidV4(),
      customerName: 'Abdul Rehman',
      customerPhone: '+92 316 7943024',
      netPayable: 5000,
      productMeasurements: '20x20',
      productName: 'Master Tiles',
      productPrice: 500,
      productQuantity: 10,
      tenantId: uuidV4(),
    });

    console.log(invoice, 'invoice created');
    
    
    return response.json({
      invoice
    });
  }
}