import { Injectable, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { OrderDTO } from "../entity/dtos/order.dto";
import { Order } from "../entity/order.entity";
import { Repository } from "typeorm";
import { OrderInputDTO } from "../entity/dtos/order-input.dto";
import { ProductsService } from "../products/products.service";
import { UsersService } from "../users/users.service";

@Injectable()
export class OrdersService {
  constructor(
    @Inject("ORDERS_REPOSITORY")
    private ordersRepository: Repository<Order>,

    private readonly productsService: ProductsService,
    private readonly usersService: UsersService
  ) {}

  async findAll(): Promise<OrderDTO[]> {
    const orders = (
      await this.ordersRepository.find({
        relations: {
          user: true,
          products: true,
        },
      })
    ).map((o) => new OrderDTO(o.id, o.user, o.products));

    return orders;
  }

  async findOne(id: string): Promise<Order> {
    console.log(id);

    const order = await this.ordersRepository.findOne({
      where: { id: parseInt(id) },
      relations: { user: true, products: true },
    });

    if (order) return new OrderDTO(order.id, order.user, order.products);
    throw new HttpException("Identificador inválido", HttpStatus.BAD_REQUEST);
  }

  async create(body: OrderInputDTO): Promise<OrderDTO> {
    const user = await this.usersService.findOne(body.userId);
    const products = this.productsService.findN(body.productsSelected);
    let order = new Order(undefined, user, products);

    order = await this.ordersRepository.save(order);

    products.forEach((p) => {
      this.ordersRepository.manager.query(
        `INSERT INTO public.order_product (order_id, product_id) VALUES (${order.id}, ${p.id});`
      );
    });

    return this.ordersRepository.save(order);
  }
}
