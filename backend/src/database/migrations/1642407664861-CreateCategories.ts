import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategories1642407664861 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_categories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: "datetime('now')"
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: "datetime('now')"
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
            default: 'NULL'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tbl_categories');
  }
}
