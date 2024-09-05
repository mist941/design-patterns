import {IUser} from "./User";

export interface IMediator {
  user: IUser;

  notify(serviceName: string): void;
}

export class Mediator implements IMediator {
  user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }

  notify(serviceName: string) {
    console.log(`${serviceName} is going to ${this.user.name}`);
  }
}