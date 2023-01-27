import { PriceTableProduct } from "@modules/price_tables/entities/PriceTableProduct";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('units')
export class Unit {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  quantity!: number;

  @Column()
  abbreviation!: string;
  
  @Column()
  is_fractionated!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => PriceTableProduct, (priceTableProduct) => priceTableProduct.unit)
  price_table_products!: PriceTableProduct[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}