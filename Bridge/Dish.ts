import {Ingredients} from "./types";

export abstract class Dish {
  private name: string = "";
  private ingredients: Ingredients[] = [];

  addName(name: string): void {
    this.name = name;
  }

  addIngredients(ingredients: Ingredients[]): void {
    this.ingredients = ingredients;
  }
}

export class FirstDish extends Dish {
  //some logic for first dish
}

export class SecondDish extends Dish {
  //some logic for second dish
}

export class ThirdDish extends Dish {
  //some logic for third dish
}

export class Dessert extends Dish {
  //some logic for desert
}