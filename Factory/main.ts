import {FurnaceFactory} from "./FurnaceFactory";
import {Ingredients} from "./Dish";

const furnace = new FurnaceFactory();

const italianPizza = furnace.prepareDish(
  "Italian Pizza",
  [Ingredients.DOUGH, Ingredients.SAUSAGE, Ingredients.TOMATO]
);

const ukrainianSandwich = furnace.prepareDish(
  "Ukrainian Sandwich",
  [Ingredients.BREAD, Ingredients.SAUSAGE, Ingredients.TOMATO]
);

// console.log(italianPizza.name);
// console.log(ukrainianSandwich.ingredients);