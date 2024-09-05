import {BaconCommand, CheeseCommand, Command, PineapplesCommand, SeafoodCommand} from './Command';

export abstract class Expression {
  abstract interpret(): Command[];
}

export class ItalianPizzaExpression extends Expression {
  interpret(): Command[] {
    return [
      new BaconCommand(),
      new CheeseCommand()
    ];
  }
}

export class JapanesePizzaExpression extends Expression {
  interpret(): Command[] {
    return [
      new SeafoodCommand(),
      new PineapplesCommand()
    ];
  }
}
