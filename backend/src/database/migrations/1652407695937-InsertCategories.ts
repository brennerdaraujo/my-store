import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuid } from 'uuid';

export class InsertCategories1652407695937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO tbl_categories (id, name)
      VALUES
        ('${uuid()}', 'Camisetas'),
        ('${uuid()}', 'Chuteiras'),
        ('${uuid()}', 'Tênis'),
        ('${uuid()}', 'Calças'),
        ('${uuid()}', 'Shorts'),
        ('${uuid()}', 'Camisas e Polos'),
        ('${uuid()}', 'Bonés')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM tbl_categories');
  }
}
