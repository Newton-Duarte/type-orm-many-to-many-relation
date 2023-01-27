import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { PriceTableProduct } from "./PriceTableProduct";
import { v4 as uuidV4 } from 'uuid';

@Entity('price_tables')
export class PriceTable {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @ManyToMany(() => PriceTableProduct, (priceTableProduct) => priceTableProduct.price_table, { cascade: true })
  @JoinTable({
    name: 'price_table_products',
    joinColumns: [{ name: 'price_table_id' }],
    inverseJoinColumns: [{ name: 'id' }],
  })
  price_table_products!: PriceTableProduct[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}