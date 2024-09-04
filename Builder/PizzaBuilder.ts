enum Ingredients {
  CHEESE = "CHEESE",
  BACON = "BACON",
  PINEAPPLES = "PINEAPPLES",
  MUSHROOMS = "MUSHROOMS",
  SEAFOOD = "SEAFOOD"
}

interface IPizzaBuilder {
  addCheese(): PizzaBuilder;

  addBacon(): PizzaBuilder;

  addPineapples(): PizzaBuilder;

  addMushrooms(): PizzaBuilder;

  addSeafood(): PizzaBuilder;

  preparePizza(): Pizza;
}

export class Pizza {
  ingredients: Ingredients[]
  name: string;

  constructor(name: string) {
    this.name = name;
    this.ingredients = [];
  }
}

export class PizzaBuilder implements IPizzaBuilder {
  private readonly pizza: Pizza;

  constructor(name: string) {
    this.pizza = new Pizza(name);
  }

  addCheese() {
    this.pizza.ingredients.push(Ingredients.CHEESE);
    return this;
  }

  addMushrooms() {
    this.pizza.ingredients.push(Ingredients.MUSHROOMS);
    return this;
  }

  addPineapples() {
    this.pizza.ingredients.push(Ingredients.PINEAPPLES);
    return this;
  }

  addSeafood() {
    this.pizza.ingredients.push(Ingredients.SEAFOOD);
    return this;
  }

  addBacon() {
    this.pizza.ingredients.push(Ingredients.BACON);
    return this;
  }

  preparePizza() {
    return this.pizza;
  }
}