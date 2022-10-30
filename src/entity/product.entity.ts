import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export type Categories =
  | "TODOS"
  | "PIZZA"
  | "SANDUICHES"
  | "ACOMPANHAMENTOS"
  | "BEBIDAS"
  | "MILK_SHAKES"
  | "COMBOS"
  | "SUSHI"
  | "PASTEL"
  | "KIKAO"
  | "MASSAS"
  | "RISOTO"
  | "CHURRASCO"
  | "GELADOS";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @Column()
  description?: string;

  @Column()
  image?: string;

  @Column()
  category: Categories;
}
