import { Sequelize } from 'sequelize-typescript';
const { DB_NAME, DB_ADMIN_USER, DB_ADMIN_PASSWORD, DB_HOST } = process.env;


export const sequelize = new Sequelize(DB_NAME, DB_ADMIN_USER, DB_ADMIN_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});
