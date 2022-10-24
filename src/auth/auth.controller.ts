import { Controller, Request, Post, UseGuards, Body } from "@nestjs/common";
import { UserInputDTO } from "../entity/dtos/user-input.dto";
import { UserDTO } from "../entity/dtos/user.dto";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() req: { user: UserDTO }): Promise<UserDTO> {
    return req.user;
  }

  @Post("/create-account")
  async createAccount(@Body() body: UserInputDTO): Promise<UserDTO> {
    return this.authService.createAccount(body);
  }
}
