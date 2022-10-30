import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrderDTO } from "../entity/dtos/order.dto";
import { OrderInputDTO } from "../entity/dtos/order-input.dto";
import { OrdersService } from "./orders.service";
import { OrdersByUser } from "src/entity/dtos/orders-by-user";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll(): Promise<OrderDTO[]> {
    return this.ordersService.findAll();
  }

  @Get(":id")
  async findOne(@Param() params: { id: string }): Promise<OrderDTO> {
    return this.ordersService.findOne(params.id);
  }

  @Post()
  async create(@Body() body: OrderInputDTO): Promise<OrderDTO> {
    return this.ordersService.create(body);
  }

  @Get("my-orders/:idUser")
  async findAllOrdersByUser(@Param() params: { idUser: string }): Promise<OrdersByUser[]> {
    return this.ordersService.findAllOrdersByUser(params.idUser);
  }
}
