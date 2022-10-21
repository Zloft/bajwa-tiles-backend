import { Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Invoice } from '../models';
import { Body, Controller, Get, Post, Req, Res } from 'routing-controllers';
import { invoiceSchema } from '../validators';

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

      const { value, error } = invoiceSchema.validate(invoiceData);

      if (error) return response.status(400).json({ error });
      
      const { 
        productName,
        customerName, 
        customerPhone, 
        productPrice,
        productQuantity,
        productMeasurements, 
      } = value;

      const netPayable = productPrice * productQuantity;

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

      return response.status(200).json({
        invoice
      });
    } catch (error) {
      
    }
  }
}