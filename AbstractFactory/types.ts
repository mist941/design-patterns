export enum FoodTypes {
  JAPANESE = "JAPANESE",
  AMERICAN = "AMERICAN",
  UKRAINIAN = "UKRAINIAN"
}

export enum Ingredients {
  COLA = "COLA",
  ICE = "ICE",
  JUICE = "JUICE",
  SAKE = "SAKE",
  RICE = "RICE",
  FISH = "FISH",
  POTATO = "POTATO",
  DOUGH = "DOUGH",
  CHERY = "CHERY"
}

export interface IDrink {
  ingredients: string[],
  name: string
}

export interface IDish {
  ingredients: string[],
  name: string
}


export interface IFoodFactory {
  prepareDrink(): IDrink

  prepareDish(): IDish
}

export interface IComplexLunch {
  drink: IDrink,
  dish: IDish,
}
