import { Injectable, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { Categories, Product } from "../entity/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService {
  constructor(
    @Inject("PRODUCTS_REPOSITORY")
    private productsRepository: Repository<Product>
  ) {}

  async findAll(): Promise<Product[]> {
    const products = (await this.productsRepository.find()).sort((a, b) => {
      return a.id - b.id;
    });

    return products;
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ id: parseInt(id) });
    if (product) return product;
    throw new HttpException("Identificador inválido", HttpStatus.BAD_REQUEST);
  }

  findN(ids: string[]): Product[] {
    const products: Product[] = [];

    ids.forEach((id) => {
      this.productsRepository.findOneBy({ id: parseInt(id) }).then((p) => {
        products.push(p);
      });
    });

    return products;
  }

  async findAllCategoriesByRegisteredProducts(): Promise<Categories[]> {
    const products = await this.productsRepository
      .createQueryBuilder("products")
      .select(["category"])
      .distinct()
      .execute();

    const categories = products.map((p: { category: Categories }) => p.category);
    return categories;
  }
}
