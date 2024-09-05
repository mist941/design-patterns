import {ItalianPizza} from './Pizza';
import {CheesePizzaVisitor} from './Visitor';

const pizza = new ItalianPizza();
pizza.accept(new CheesePizzaVisitor());

console.log(pizza);
