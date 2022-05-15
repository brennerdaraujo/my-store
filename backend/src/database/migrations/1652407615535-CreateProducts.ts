import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateProducts1652407615535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'category_id',
            type: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'img_path',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'text'
          },
          {
            name: 'stock',
            type: 'integer'
          },
          {
            name: 'status',
            type: 'boolean'
          },
          {
            name: 'normal_price',
            type: 'float'
          },
          {
            name: 'promotional_price',
            type: 'float'
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

    await queryRunner.createForeignKey(
      'tbl_products',
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedTableName: 'tbl_categories',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tbl_products');
  }
}
