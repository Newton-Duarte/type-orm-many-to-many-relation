import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductCategories1674895744424 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'product_units',
          columns: [
            {
              name: 'product_id',
              type: 'uuid',
            },
            {
              name: 'unit_id',
              type: 'uuid',
            },
          ],
          foreignKeys: [
            {
              name: 'Product',
              referencedTableName: 'products',
              referencedColumnNames: ['id'],
              columnNames: ['product_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            {
              name: 'Unit',
              referencedTableName: 'units',
              referencedColumnNames: ['id'],
              columnNames: ['unit_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('product_units');
    }

}
