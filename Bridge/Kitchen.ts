import {Dish} from "./Dish";
import {Ingredients} from "./types";

abstract class Kitchen {
  protected dish: Dish;

  constructor(dish: Dish) {
    this.dish = dish;
  }

  abstract prepareDish(name: string, ingredients: Ingredients[]): Dish
}

export class JapaneseKitchen extends Kitchen {
  prepareDish(name: string, ingredients: Ingredients[]): Dish {
    this.dish.addName("Japanese " + name);
    this.dish.addIngredients(ingredients);
    return this.dish;
  }
}

export class AmericanKitchen extends Kitchen {
  prepareDish(name: string, ingredients: Ingredients[]): Dish {
    this.dish.addName("American " + name);
    this.dish.addIngredients(ingredients);
    return this.dish;
  }
}

export class UkrainianKitchen extends Kitchen {
  prepareDish(name: string, ingredients: Ingredients[]): Dish {
    this.dish.addName("Ukrainian " + name);
    this.dish.addIngredients(ingredients);
    return this.dish;
  }
}