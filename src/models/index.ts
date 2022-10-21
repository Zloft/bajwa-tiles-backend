import Sequelize from 'sequelize';
import { sequelize } from '../config/db';
import * as config from '../config/config';
import { Invoice } from './invoice.model';
import { Payment } from './payments.modal';
import { Tenant } from './tenant.model';

sequelize.addModels([Tenant, Invoice, Payment])


export { Sequelize, sequelize, Invoice, Payment };



