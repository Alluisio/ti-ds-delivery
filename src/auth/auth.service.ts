import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(usernameOrEmail: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(usernameOrEmail);

    if (user && user.password === pass) {
      const userForReturn = user;
      delete userForReturn.password;

      return userForReturn;
    }
  }
}
