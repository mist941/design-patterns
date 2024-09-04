import {IDish, Ingredients, Pizza, Sandwich} from "./Dish";

interface IFurnaceFactory {
  prepareDish(name: string, ingredients: Ingredients[]): IDish
}

export class FurnaceFactory implements IFurnaceFactory {
  private readonly pizzaIngredients: Ingredients[] =
    [Ingredients.DOUGH, Ingredients.SAUSAGE, Ingredients.TOMATO];
  private readonly sandwichIngredients: Ingredients[] =
    [Ingredients.BREAD, Ingredients.SAUSAGE, Ingredients.TOMATO];

  public prepareDish(name: string, ingredients: Ingredients[]): IDish {
    if (ingredients.every(p => this.pizzaIngredients.indexOf(p) > -1)) {
      return new Pizza(name, ingredients);
    }

    if (ingredients.every(p => this.sandwichIngredients.indexOf(p) > -1)) {
      return new Sandwich(name, ingredients);
    }

    throw new Error("I can't create dish from your ingredients");
  }
}