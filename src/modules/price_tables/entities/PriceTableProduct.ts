import { Product } from '@modules/products/entities/Product';
import { Unit } from '@modules/units/entities/Unit';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ColumnNumericTransformer } from '../../../shared/database/transformers/ColumnNumericTransformer';
import { PriceTable } from './PriceTable';

@Entity('price_table_products')
export class PriceTableProduct {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  price_table_id!: string;

  @Column()
  product_id!: string;

  @Column()
  product_unit_id!: string;

  @Column('numeric', {
    precision: 15,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
  })
  product_price!: number;

  @ManyToOne(() => PriceTable, (priceTable) => priceTable.price_table_products)
  @JoinColumn({
    name: 'price_table_id'
  })
  price_table!: PriceTable;

  @ManyToOne(() => Product, (product) => product.price_table_products)
  @JoinColumn({
    name: 'product_id'
  })
  product!: Product;

  @ManyToOne(() => Unit, (product) => product.price_table_products)
  @JoinColumn({
    name: 'product_unit_id'
  })
  unit!: Unit;
}