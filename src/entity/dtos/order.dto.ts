import { Product } from "../product.entity";
import { User } from "../user.entity";
import { UserDTO } from "./user.dto";

export class OrderDTO {
  id: number;
  user: UserDTO;
  products: Product[];

  constructor(id?: number, user?: User, products?: Product[]) {
    this.id = id;
    this.user = new UserDTO(user.id, user.uuid, user.firstName, user.lastName);
    this.products = products;
  }
}
