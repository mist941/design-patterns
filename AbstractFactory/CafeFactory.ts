import {FoodTypes, IComplexLunch, IDish, IDrink, IFoodFactory} from './types';
import {JapaneseFoodFactory} from './JapaneseFood';
import {AmericanFoodFactory} from './AmericanFood';
import {UkrainianFoodFactory} from './UkrainianFood';

export class ComplexLunch implements IComplexLunch {
  drink: IDrink
  dish: IDish

  constructor(typeOfFood: FoodTypes) {
    let foodFactory: IFoodFactory;

    if (typeOfFood === FoodTypes.JAPANESE) foodFactory = new JapaneseFoodFactory();
    else if (typeOfFood === FoodTypes.AMERICAN) foodFactory = new AmericanFoodFactory();
    else foodFactory = new UkrainianFoodFactory();

    this.drink = foodFactory.prepareDrink();
    this.dish = foodFactory.prepareDish();
  }
}
