import { Order } from "../entity/order.entity";
import { DataSource } from "typeorm";

export const ordersProviders = [
  {
    provide: "ORDERS_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Order),
    inject: ["DATA_SOURCE"],
  },
];
