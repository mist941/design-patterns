import {FoodTypes, IComplexLunch} from './types';
import {ComplexLunch} from './CafeFactory';

const createComplexLunch = (typeOfFood: FoodTypes): IComplexLunch => {
  return new ComplexLunch(typeOfFood);
}

const ukrainianLunch = createComplexLunch(FoodTypes.UKRAINIAN);

console.log(ukrainianLunch);
