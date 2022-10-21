import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrderDTO } from "../entity/dtos/order.dto";
import { OrderInputDTO } from "../entity/dtos/order-input.dto";
import { OrdersService } from "./orders.service";

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
}
