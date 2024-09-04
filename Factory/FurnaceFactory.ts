import {IDish, Ingredients, Pizza, Sandwich} from "./Dish";

interface IFurnaceFactory {
  prepareDish(name: string, ingredients: Ingredients[]): IDish
}

export class FurnaceFactory implements IFurnaceFactory {
  prepareDish(name:string, ingredients:Ingredients[]): IDish {
    const pizzaIngredients = [Ingredients.DOUGH, Ingredients.SAUSAGE, Ingredients.TOMATO];
    const sandwichIngredients = [Ingredients.BREAD, Ingredients.SAUSAGE, Ingredients.TOMATO];

    if (ingredients.every(p => pizzaIngredients.indexOf(p) > -1)) {
      return new Pizza(name, ingredients);
    }

    if (ingredients.every(p => sandwichIngredients.indexOf(p) > -1)) {
      return new Sandwich(name, ingredients);
    }

    throw new Error("I can't create dish from your ingredients");
  }
}