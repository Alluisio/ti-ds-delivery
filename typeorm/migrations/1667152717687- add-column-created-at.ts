import { MigrationInterface, QueryRunner } from "typeorm";

export class undefinedddColumnCreatedAt1667152717687 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`alter table "order" add created_at TIMESTAMP default CURRENT_TIMESTAMP not null;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`alter table "order" drop column created_at;`);
  }
}
