import {ItalianPizzaExpression, JapanesePizzaExpression} from './Expression';
import {Recipes} from './types';
import {Command} from './Command';

export class Interpreter {
  italianPizzaExpression: ItalianPizzaExpression;
  japanesePizzaExpression: JapanesePizzaExpression;

  constructor() {
    this.italianPizzaExpression = new ItalianPizzaExpression();
    this.japanesePizzaExpression = new JapanesePizzaExpression();
  }

  public getIngredients(recipe: Recipes): Command[] {
    if (recipe === Recipes.ITALIAN_PIZZA) return this.italianPizzaExpression.interpret();
    if (recipe === Recipes.JAPANESE_PIZZA) return this.japanesePizzaExpression.interpret();
    return [];
  }
}
