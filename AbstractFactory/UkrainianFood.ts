import {IDish, IDrink, IFoodFactory, Ingredients} from './types';

class UkrainianDrink implements IDrink {
  ingredients: Ingredients[]
  name: string

  constructor(name: string, ingredients: Ingredients[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

class UkrainianDish implements IDish {
  ingredients: Ingredients[]
  name: string

  constructor(name: string, ingredients: Ingredients[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

export class UkrainianFoodFactory implements IFoodFactory {
  prepareDrink(): IDrink {
    return new UkrainianDrink("Apple juice", [Ingredients.JUICE]);
  }

  prepareDish(): IDish {
    return new UkrainianDish("Dumplings with cherries", [Ingredients.DOUGH, Ingredients.CHERY]);
  }
}