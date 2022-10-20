import { DataTypes, InferAttributes, InferCreationAttributes, Model, Optional, Sequelize } from 'sequelize';

const InvoiceModel = (sequelize: Sequelize) => {
  interface InvoiceAttributes {
    id: string;
    customerName: string;
    customerPhone: string;
    productName: string;
    productQuantity: number;
    productPrice: number;
    productMeasurements: string;
    netPayable: number;
    tenantId: string;
    // updatedAt?: Date;
    // deletedAt?: Date;
  }

  class Invoice extends Model<InferAttributes<Invoice>, InferCreationAttributes<Invoice>> {
    declare id: string;
    declare customerName: string;
    declare customerPhone: string;
    declare productName: string;
    declare productQuantity: number;
    declare productPrice: number;
    declare productMeasurements: string;
    declare netPayable: number;
    declare tenantId: string;

    // timestamps!
    declare readonly createdAt?: Date;
    declare readonly updatedAt?: Date;
    declare readonly deletedAt?: Date;
  }

  Invoice.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerPhone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productMeasurements: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    netPayable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tenantId: {
      type: DataTypes.UUID,
    },
  }, {
    timestamps: true,
    sequelize,
    tableName: 'invoices'
  });

  return Invoice;
}

export default InvoiceModel;