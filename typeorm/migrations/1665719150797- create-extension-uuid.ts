import { MigrationInterface, QueryRunner } from "typeorm";

export class undefinedreateExtensionUuid1665719150797 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop function uuid_generate_v1();`);
  }
}
