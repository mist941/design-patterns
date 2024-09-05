import {Ingredients} from './types';
import {IVisitor} from './Visitor';

export interface IPizza {
  ingredients: Ingredients[];

  accept(visitor: IVisitor): void;
}

export class ItalianPizza implements IPizza {
  ingredients: Ingredients[] = [];

  accept(visitor: IVisitor) {
    visitor.italianPizzaVisitor(this);
  }
}

export class JapanesePizza implements IPizza {
  ingredients: Ingredients[] = [];

  accept(visitor: IVisitor) {
    visitor.japanesePizzaVisitor(this);
  }
}
