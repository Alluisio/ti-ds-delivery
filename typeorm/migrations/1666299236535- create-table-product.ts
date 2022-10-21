import { MigrationInterface, QueryRunner } from "typeorm";

export class undefinedreateTableProduct1666299236535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        create table product (
            id          bigserial
                constraint product_pk
                    primary key,
            name        varchar(70) not null,
            value       numeric     not null,
            description text,
            image       text,
            category    text
        );

        comment on column product.category is 'PIZZA SANDUICHES ACOMPANHAMENTOS BEBIDAS MILK_SHAKES COMBOS SUSHI PASTEL KIKAO MASSAS RISOTO CHURRASCO GELADOS';

        alter table product
        owner to postgres;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query("drop table product;");
  }
}
