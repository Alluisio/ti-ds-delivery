export class UserDTO {
  id: number;
  uuid: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  email: string;
  password: string;

  constructor(
    id?: number,
    uuid?: string,
    firstName?: string,
    lastName?: string,
    isActive?: boolean,
    email?: string,
    password?: string
  ) {
    this.id = id;
    this.uuid = uuid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
    this.email = email;
    this.password = password;
  }
}
