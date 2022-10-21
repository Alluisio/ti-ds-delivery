import { MigrationInterface, QueryRunner } from "typeorm";

export class undefinedreateTableOrder1666302869028 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        create table public."order" (
            id       bigserial not null
                constraint order_pk
                    primary key,
            "userId" bigint    not null
                constraint order_user_id_fk
                    references public."user" (id)
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table if exists "order" cascade;`);
  }
}
