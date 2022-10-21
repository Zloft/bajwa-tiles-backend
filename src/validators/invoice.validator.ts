import * as Joi from 'joi';
import messages from '../config/messages';
import { PAYMENT_TYPES } from '../config/constants';

export const invoiceSchema = Joi.object({
  productName: Joi.string().trim(true).required(),
  customerName: Joi.string().trim(true).required(),
  customerPhone: Joi.string().trim(true).required(),
  productPrice: Joi.number().not(0).required(),
  productQuantity: Joi.number().not(0).required(),
  productMeasurements: Joi.string().trim(true).required(),
  payments: Joi.array().items({
    paymentType: Joi.string().required().equal(...PAYMENT_TYPES),
    amount: Joi.number().required(),
  }).min(1).required()
}).custom((value, helper) => {  
  const { productPrice, productQuantity, payments } = value;
  const netPayable = productPrice * productQuantity;

  const amountsArray: number[] = payments.map((payment: any) => payment.amount);
  const totalPaid = amountsArray.reduce((total, amount) => total + amount, 0);

  if (totalPaid != netPayable)  throw new Error(messages.VALIDATION.INVOICE.PAYMENTS);

  return {...value, netPayable};
});