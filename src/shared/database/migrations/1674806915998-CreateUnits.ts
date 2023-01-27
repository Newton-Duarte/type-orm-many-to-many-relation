import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { v4 as uuidV4 } from 'uuid';

export class CreateUnits1674806915998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'units',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'abbreviation',
              type: 'varchar',
            },
            {
              name: 'quantity',
              type: 'real',
            },
            {
              name: 'is_fractionated',
              type: 'boolean',
              default: false,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'deleted_at',
              type: 'timestamp',
              isNullable: true,
            },
          ],
        })
      );
  
      await queryRunner.query(
        `INSERT INTO "units" (id, name, abbreviation, quantity)
        values
          ('${uuidV4()}', 'Unidade', 'UND', 1);
        `
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('units');
    }

}
