import {Ingredients, IPizza} from './types';

export abstract class PizzaDecorator implements IPizza {
  protected subject: IPizza;
  ingredients: Ingredients[];
  name: string;

  protected constructor(subject: IPizza) {
    this.subject = subject;
    this.name = subject.name;
    this.ingredients = subject.ingredients;
  }

  changeName(name: string): void {
    this.name = name;
    this.subject.name = name;
  }
}

export class CheeseDecorator extends PizzaDecorator {
  constructor(subject: IPizza) {
    super(subject);
    this.subject.ingredients.push(Ingredients.CHEESE);
  }
}

export class BaconDecorator extends PizzaDecorator {
  constructor(subject: IPizza) {
    super(subject);
    this.subject.ingredients.push(Ingredients.BACON);
  }
}

export class PineapplesDecorator extends PizzaDecorator {
  constructor(subject: IPizza) {
    super(subject);
    this.subject.ingredients.push(Ingredients.PINEAPPLES);
  }
}

export class MushroomsDecorator extends PizzaDecorator {
  constructor(subject: IPizza) {
    super(subject);
    this.subject.ingredients.push(Ingredients.MUSHROOMS);
  }
}

export class SeafoodDecorator extends PizzaDecorator {
  constructor(subject: IPizza) {
    super(subject);
    this.subject.ingredients.push(Ingredients.SEAFOOD);
  }
}
