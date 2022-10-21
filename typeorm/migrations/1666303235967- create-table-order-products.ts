import { MigrationInterface, QueryRunner } from "typeorm";

export class undefinedreateTableOrderProducts1666303235967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        
        create table public.order_product (
            order_id   bigint not null
                constraint order_product_order__fk
                    references public."order" (id),
            product_id bigint not null
                constraint order_product_product__fk
                    references public.product (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table order_product;`);
  }
}
