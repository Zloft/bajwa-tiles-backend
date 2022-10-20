import { Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Invoice } from '../models';
import { Body, Controller, Get, Post, Req, Res } from 'routing-controllers';

@Controller('/invoices')
export class InvoicesController {

  @Get('/')
  async getInvoices(@Req() request: any, @Res() response: Response) {
    const invoices = await Invoice.findAll();
    return response.json({
      invoices
    });
  }

  @Post('/add')  
  async addInvoice(@Body() invoiceData: any, @Res() response: Response) {
    try {
      const { 
        netPayable,
        productName,
        customerName, 
        customerPhone, 
        productPrice,
        productQuantity,
        productMeasurements, 
      } = invoiceData;

      const invoice = await Invoice.create({
        id: uuidV4(),
        customerName,
        customerPhone,
        netPayable,
        productMeasurements,
        productName,
        productPrice,
        productQuantity,
      });

      return response.json({
        invoice
      });
    } catch (error) {
      
    }
  }
}