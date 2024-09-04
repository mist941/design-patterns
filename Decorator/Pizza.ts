import {Ingredients, IPizza} from './types';

export class Pizza implements IPizza {
  name: string;
  ingredients: Ingredients[] = [];

  constructor(name: string) {
    this.name = name;
  }

  changeName(name: string): void {
    this.name = name;
  }
}