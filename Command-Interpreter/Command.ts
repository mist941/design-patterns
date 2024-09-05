import {PizzaReceiver} from "./Receiver";
import {Ingredients} from "./types";

export abstract class Command {
  abstract execute(receiver: PizzaReceiver): void;
}

export class CheeseCommand extends Command {
  execute(receiver: PizzaReceiver): void {
    receiver.addIngredient(Ingredients.CHEESE);
  }
}

export class BaconCommand extends Command {
  execute(receiver: PizzaReceiver): void {
    receiver.addIngredient(Ingredients.BACON);
  }
}

export class PineapplesCommand extends Command {
  execute(receiver: PizzaReceiver): void {
    receiver.addIngredient(Ingredients.PINEAPPLES);
  }
}

export class MushroomsCommand extends Command {
  execute(receiver: PizzaReceiver): void {
    receiver.addIngredient(Ingredients.MUSHROOMS);
  }
}

export class SeafoodCommand extends Command {
  execute(receiver: PizzaReceiver): void {
    receiver.addIngredient(Ingredients.SEAFOOD);
  }
}