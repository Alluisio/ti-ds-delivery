import { Controller, Get } from "@nestjs/common";
import { Categories, Product } from "../entity/product.entity";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get("dropdown-category")
  async findAllCategoriesByRegisteredProducts(): Promise<Categories[]> {
    return this.productsService.findAllCategoriesByRegisteredProducts();
  }
}
