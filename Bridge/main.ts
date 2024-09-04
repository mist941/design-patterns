import {JapaneseKitchen} from "./Kitchen";
import {FirstDish} from "./Dish";
import {Ingredients} from "./types";

const firstDish: FirstDish = new FirstDish();
const japaneseKitchen: JapaneseKitchen = new JapaneseKitchen(firstDish);

const firstJapaneseDish: FirstDish = japaneseKitchen.prepareDish("Sushi", [Ingredients.FISH, Ingredients.RICE]);

console.log(firstJapaneseDish);