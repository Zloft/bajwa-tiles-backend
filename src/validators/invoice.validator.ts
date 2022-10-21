import * as Joi from 'joi';

export const invoiceSchema = Joi.object({
  productName: Joi.string().trim(true).required(),
  customerName: Joi.string().trim(true).required(),
  customerPhone: Joi.string().trim(true).required(),
  productPrice: Joi.number().required(),
  productQuantity: Joi.number().required(),
  productMeasurements: Joi.string().trim(true).required(),
});