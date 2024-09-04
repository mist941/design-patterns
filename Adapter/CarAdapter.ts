import {Car} from "./Car";

interface ICarAdapter {
  car: Car

  changeName(name: string): void;

  getName(): string;

  drive(): void;

  stop(): void;
}

export class CarAdapter implements ICarAdapter {
  car: Car;

  constructor(car: Car) {
    this.car = car;
  }

  changeName(name: string) {
    this.car.nazva = name;
  }

  getName(): string {
    return this.car.nazva;
  }

  drive() {
    this.car.yuhaty();
  }

  stop() {
    this.car.zupynyty();
  }
}