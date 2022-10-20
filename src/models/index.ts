import Sequelize from 'sequelize';
import { sequelize } from '../config/db';
import * as config from '../config/config';
import InvoiceModel from './invoice.model';

export const Invoice = InvoiceModel(sequelize);
export { sequelize };
export { Sequelize };


// fs
//   .readdirSync(__dirname)
//   .filter((file: any) => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach((file: any) => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

