export enum Ingredients {
  SAUSAGE = "SAUSAGE",
  DOUGH = "DOUGH",
  TOMATO = "TOMATO",
  BREAD = "BREAD"
}

export interface IDish {
  ingredients: Ingredients[],
  name: string,
}

export class Pizza implements IDish {
  name: string;
  ingredients: Ingredients[];

  constructor(name: string, products: Ingredients[]) {
    this.name = name;
    this.ingredients = products;
  }

  //some logic for pizza
}

export class Sandwich implements IDish {
  name: string;
  ingredients: Ingredients[];

  constructor(name: string, products: Ingredients[]) {
    this.name = name;
    this.ingredients = products;
  }

  //some logic for sandwich
}
