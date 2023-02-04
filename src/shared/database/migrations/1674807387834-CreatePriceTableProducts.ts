import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePriceTableProducts1674807387834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'price_table_products',
          columns: [
            {
              name: 'price_table_id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'product_id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'product_unit_id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'product_price',
              type: 'decimal',
              precision: 15,
              scale: 2,
            },
          ],
          foreignKeys: [
            {
              name: 'PriceTable',
              referencedTableName: 'price_tables',
              referencedColumnNames: ['id'],
              columnNames: ['price_table_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            {
              name: 'PriceTableProduct',
              referencedTableName: 'products',
              referencedColumnNames: ['id'],
              columnNames: ['product_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            {
              name: 'PriceTableProductUnit',
              referencedTableName: 'units',
              referencedColumnNames: ['id'],
              columnNames: ['product_unit_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('price_table_products');
    }

}
