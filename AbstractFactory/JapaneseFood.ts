import {IDish, IDrink, IFoodFactory, Ingredients} from './types';

class JapaneseDrink implements IDrink {
  ingredients: Ingredients[]
  name: string

  constructor(name: string, ingredients: Ingredients[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

class JapaneseDish implements IDish {
  ingredients: Ingredients[]
  name: string

  constructor(name: string, ingredients: Ingredients[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

export class JapaneseFoodFactory implements IFoodFactory {
  prepareDrink(): IDrink {
    return new JapaneseDrink("Sake", [Ingredients.SAKE]);
  }

  prepareDish(): IDish {
    return new JapaneseDish("Sushi", [Ingredients.RICE, Ingredients.FISH]);
  }
}