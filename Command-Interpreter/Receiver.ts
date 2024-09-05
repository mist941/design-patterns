import {Ingredients} from "./types";

export class PizzaReceiver {
  private name: string;
  private ingredients: Ingredients[] = [];

  constructor(name:string) {
    this.name = name;
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}