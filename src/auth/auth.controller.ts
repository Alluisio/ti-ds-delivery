import { Controller, Request, Post, UseGuards } from "@nestjs/common";
import { UserDTO } from "src/entity/dtos/user.dto";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller("auth")
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() req: { user: UserDTO }): Promise<UserDTO> {
    return req.user;
  }
}
