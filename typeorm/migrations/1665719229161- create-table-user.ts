import { MigrationInterface, QueryRunner } from "typeorm";

export class undefinedreateTableUser1665719229161 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`create table public."user"
(
    id          bigserial                          not null
        constraint user_pk
            primary key,
    uuid        uuid    default uuid_generate_v1() not null,
    "firstName" varchar(20)                        not null,
    "lastName"  varchar(50),
    "isActive"  boolean default true               not null,
    email       text                               not null,
    password    text                               not null
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table "user";`);
  }
}
