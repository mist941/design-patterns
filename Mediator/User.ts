export interface IUser {
  name: string;
  address: string;
}

export class User implements IUser {
  address: string;
  name: string;

  constructor(address: string, name: string) {
    this.address = address;
    this.name = name;
  }
}