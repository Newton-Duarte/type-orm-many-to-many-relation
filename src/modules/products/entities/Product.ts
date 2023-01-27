import { ColumnNumericTransformer } from "../../../shared/database/transformers/ColumnNumericTransformer";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { PriceTableProduct } from "@modules/price_tables/entities/PriceTableProduct";

@Entity('products')
export class Product {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column('numeric', {
    precision: 15,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
  })
  price!: number;
  
  @Column()
  unit_id!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => PriceTableProduct, (priceTableProduct) => priceTableProduct.product)
  price_table_products!: PriceTableProduct[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}