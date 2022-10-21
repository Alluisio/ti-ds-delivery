import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { ProductsModule } from "src/products/products.module";
import { UsersModule } from "src/users/users.module";
import { OrdersController } from "./orders.controller";
import { ordersProviders } from "./orders.providers";
import { OrdersService } from "./orders.service";

@Module({
  imports: [DatabaseModule, ProductsModule, UsersModule],
  controllers: [OrdersController],
  providers: [...ordersProviders, OrdersService],
  exports: [...ordersProviders, OrdersService],
})
export class OrdersModule {}
