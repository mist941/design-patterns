import {IDish, IDrink, IFoodFactory, Ingredients} from './types';

class AmericanDrink implements IDrink {
  ingredients: Ingredients[]
  name: string

  constructor(name: string, ingredients: Ingredients[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

class AmericanDish implements IDish {
  ingredients: Ingredients[]
  name: string

  constructor(name: string, ingredients: Ingredients[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

export class AmericanFoodFactory implements IFoodFactory {
  prepareDrink(): IDrink {
    return new AmericanDrink("Ice Cola", [Ingredients.COLA, Ingredients.ICE]);
  }

  prepareDish(): IDish {
    return new AmericanDish("French fries", [Ingredients.POTATO]);
  }
}

