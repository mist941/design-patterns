export interface IPizza {
  name: string,
  ingredients: Ingredients[];
  changeName(name: string): void;
}
export enum Ingredients {
  CHEESE = "CHEESE",
  BACON = "BACON",
  PINEAPPLES = "PINEAPPLES",
  MUSHROOMS = "MUSHROOMS",
  SEAFOOD = "SEAFOOD"
}