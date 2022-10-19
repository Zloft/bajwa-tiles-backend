import { QueryInterface, DataTypes, QueryTypes, Sequelize } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async (transaction) => {
      await queryInterface.createTable('invoices', {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        customerName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        customerPhone: {
          type: DataTypes.STRING,
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
          // references: {
          //   model: 'tenants',
          //   key: 'id',
          // },
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });
    }
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async (transaction) => {
      await queryInterface.dropTable('invoices');
    }
  )
};