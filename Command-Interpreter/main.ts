import {PizzaReceiver} from "./Receiver";
import {Invoker} from "./Invoker";
import {BaconCommand, CheeseCommand, Command, PineapplesCommand} from "./Command";
import {Recipes} from './types';
import {Interpreter} from './Interpreter';

//first version without interpreter
const pizza = new PizzaReceiver("Italian pizza");
const invoker = new Invoker(pizza);

invoker.add(new BaconCommand());
invoker.add(new CheeseCommand());
invoker.redo();
invoker.add(new PineapplesCommand());
invoker.undo();
invoker.do();
console.log(pizza);

//second version with interpreter
const preparePizza = (recipe: Recipes) => {
  const pizza = new PizzaReceiver("Japanese pizza");
  const invoker = new Invoker(pizza);
  const interpreter = new Interpreter();
  const ingredients = interpreter.getIngredients(recipe);

  ingredients.forEach((i: Command) => {
    invoker.add(i);
  })

  invoker.do();

  return pizza;
}
console.log(preparePizza(Recipes.JAPANESE_PIZZA));
