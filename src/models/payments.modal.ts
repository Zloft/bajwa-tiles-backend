import { Table, Column, Model, BelongsTo, DataType, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { Tenant } from './tenant.model';
import { Invoice } from './invoice.model';

@Table({
  timestamps: true,
  tableName: 'payments'
})
export class Payment extends Model {

  @PrimaryKey
  @Column({
    type: DataType.UUID
  })
  id: string;

  @Column
  paymentType: string;

  @Column
  amount: number;

  @ForeignKey(() => Tenant)
  @Column({
    type: DataType.UUID
  })
  tenantId: Tenant;

  @ForeignKey(() => Invoice)
  @Column({
    type: DataType.UUID
  })
  invoiceId: Invoice;

  @BelongsTo(() => Invoice)
  invoice: Invoice;

  @BelongsTo(() => Tenant)
  tenant: Tenant
}