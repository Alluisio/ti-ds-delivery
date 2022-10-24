import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { envs } from "../common/env-values";
import { UserInputDTO } from "../entity/dtos/user-input.dto";
import { UserDTO } from "../entity/dtos/user.dto";
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

  async createAccount(body: UserInputDTO) {
    const userByEmail = await this.findByEmail(body.email);

    if (!userByEmail) {
      const passwordHashed = bcrypt.hashSync(body.password, envs.SALT_BCRYPT);
      body.password = passwordHashed;

      const newUser = await this.usersRepository.save(body);

      return new UserDTO(
        newUser.id,
        newUser.uuid,
        newUser.firstName,
        newUser.lastName,
        newUser.isActive,
        newUser.email
      );
    } else {
      throw new HttpException("E-mail já cadastrado.", HttpStatus.CONFLICT);
    }
  }
}
