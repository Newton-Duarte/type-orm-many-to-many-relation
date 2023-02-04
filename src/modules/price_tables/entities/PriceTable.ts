import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { PriceTableProduct } from "./PriceTableProduct";
import { v4 as uuidV4 } from 'uuid';

@Entity('price_tables')
export class PriceTable {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @OneToMany(
    () => PriceTableProduct, 
    (priceTableProduct) => priceTableProduct.price_table, 
    { cascade: true, eager: true }
  )
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