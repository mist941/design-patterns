abstract class CarPrototype {
  protected weight: number;
  protected color: string;
  protected speed: number;
  protected number: string;

  protected constructor(number: string, color: string, weight: number, speed: number) {
    this.weight = weight;
    this.color = color;
    this.speed = speed;
    this.number = number;
  }

  abstract clonePassenger(): CarPrototype;

  abstract cloneTruck(): CarPrototype;

  abstract cloneMinivan(): CarPrototype;

  abstract setColor(color: string): void;

  abstract setNumber(number: string): void;
}

export class Car extends CarPrototype {
  constructor(number: string, color: string, weight: number, speed: number) {
    super(number, color, weight, speed);
  }

  clonePassenger(): CarPrototype {
    return new Car(
      this.number,
      this.color,
      1000,
      this.speed
    );
  }

  cloneTruck(): CarPrototype {
    return new Car(
      this.number,
      this.color,
      2500,
      this.speed
    );
  }

  cloneMinivan(): CarPrototype {
    return new Car(
      this.number,
      this.color,
      1200,
      this.speed
    );
  }


  setColor(color: string) {
    this.color = color;
  }

  setNumber(number: string) {
    this.number = number;
  }
}

