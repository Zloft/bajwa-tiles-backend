import { QueryInterface, DataTypes, QueryTypes, Sequelize } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async (transaction) => {
      await queryInterface.createTable('payments', {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        paymentType: {
          type: DataTypes.ENUM('Debt', 'Credit', 'Cash'),
          allowNull: false,
        },
        invoiceId: {
          type: DataTypes.UUID,
          allowNull: false,
          // references: {
          //   model: 'invoices',
          //   key: 'id'
          // }
        },
        tenantId: {
          type: DataTypes.UUID,
          // references: {
          //   model: 'tenants',
          //   key: 'id'
          // }
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
      await queryInterface.dropTable('payments');
    }
  )
};