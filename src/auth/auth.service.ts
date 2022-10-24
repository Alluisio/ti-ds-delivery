import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UserInputDTO } from "../entity/dtos/user-input.dto";
import { UserDTO } from "../entity/dtos/user.dto";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(usernameOrEmail: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(usernameOrEmail);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const userForReturn = user;
      delete userForReturn.password;

      return userForReturn;
    }
  }

  async createAccount(body: UserInputDTO): Promise<UserDTO> {
    return this.usersService.createAccount(body);
  }
}
