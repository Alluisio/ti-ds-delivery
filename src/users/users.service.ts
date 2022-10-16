import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";

@Injectable()
export class UsersService {
  private readonly users: UserEntity[] = [
    {
      id: 1,
      uuid: "1",
      firstName: "alluisio",
      lastName: "silva",
      isActive: true,
      email: "alluisio@gmail.com",
      password: "123",
    },
    {
      id: 2,
      uuid: "2",
      firstName: "francisco",
      lastName: "junior",
      isActive: true,
      email: "francisco@gmail.com",
      password: "1234",
    },
  ];

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
