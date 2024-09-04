import {Pizza, PizzaBuilder} from "./PizzaBuilder";

const italianPizza: Pizza = new PizzaBuilder("Italian pizza")
  .addBacon()
  .addCheese()
  .addMushrooms()
  .preparePizza();


console.log(italianPizza);