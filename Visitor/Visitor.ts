import {IPizza} from './Pizza';
import {Ingredients} from './types';

export interface IVisitor {
  japanesePizzaVisitor(pizza: IPizza): void;

  italianPizzaVisitor(pizza: IPizza): void;
}

export class MeetPizzaVisitor implements IVisitor {
  italianPizzaVisitor(pizza: IPizza): void {
    pizza.ingredients = [Ingredients.BACON, Ingredients.MUSHROOMS];
  }

  japanesePizzaVisitor(pizza: IPizza): void {
    pizza.ingredients = [Ingredients.SEAFOOD, Ingredients.PINEAPPLES];
  }
}

export class CheesePizzaVisitor implements IVisitor {
  italianPizzaVisitor(pizza: IPizza): void {
    pizza.ingredients = [Ingredients.CHEESE, Ingredients.MUSHROOMS];
  }

  japanesePizzaVisitor(pizza: IPizza): void {
    pizza.ingredients = [Ingredients.PINEAPPLES, Ingredients.CHEESE];
  }
}
