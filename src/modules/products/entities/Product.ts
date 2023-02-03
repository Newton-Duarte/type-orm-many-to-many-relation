import { ColumnNumericTransformer } from "../../../shared/database/transformers/ColumnNumericTransformer";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { PriceTableProduct } from "@modules/price_tables/entities/PriceTableProduct";
import { Unit } from "@modules/units/entities/Unit";

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

  @ManyToMany(() => Unit, { cascade: true })
  @JoinTable({
    name: 'product_units',
    joinColumns: [{ name: 'product_id'}],
    inverseJoinColumns: [{ name: 'unit_id'}]
  })
  units!: Unit[];
  
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