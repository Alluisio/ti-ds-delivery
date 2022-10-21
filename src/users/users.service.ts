import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_REPOSITORY")
    private usersRepository: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ email });
  }

  async findOne(id: string): Promise<User> {
    const user = this.usersRepository.findOneBy({ id: parseInt(id) });
    if (user) return user;
    throw new HttpException("Identificador inválido", HttpStatus.BAD_REQUEST);
  }
}
