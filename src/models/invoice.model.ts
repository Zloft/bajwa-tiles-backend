import { Table, Column, Model, HasMany, DataType, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Payment } from './payments.modal';
import { Tenant } from './tenant.model';

@Table({
  timestamps: true,
  tableName: 'invoices'
})
export class Invoice extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID
  })
  id: string;

  @Column
  customerName: string;

  @Column
  customerPhone: string;

  @Column
  productName: string;

  @Column
  productQuantity: number;

  @Column
  productPrice: number;

  @Column
  productMeasurements: string;

  @Column
  netPayable: number;

  @ForeignKey(() => Tenant)
  @Column({
    type: DataType.UUID
  })
  tenantId: string;

  @BelongsTo(() => Tenant)
  tenant: Tenant;

  @HasMany(() => Payment)
  payments: Payment[];
}