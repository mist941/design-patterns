import {MushroomsDecorator, PizzaDecorator, SeafoodDecorator} from './PizzaDecorator';
import {Pizza} from './Pizza';

const pizza: PizzaDecorator = new MushroomsDecorator(new SeafoodDecorator(new Pizza("Asian pizza")));
pizza.changeName("Italian Pizza");
console.log(pizza);
