import {IFurnace} from "./Furnace";

export interface IState {
  context: IFurnace;

  bake(): void;
}

export class ColdState implements IState {
  context: IFurnace;


  constructor(context: IFurnace) {
    this.context = context;
  }

  bake(): void {
    throw new Error("Furnace is cold");
  }
}

export class ReadyToBakeState implements IState {
  context: IFurnace;


  constructor(context: IFurnace) {
    this.context = context;
  }

  bake(): void {
    console.log("Pizza is cooking");
  }
}

export class OverheatingState implements IState {
  context: IFurnace;

  constructor(context: IFurnace) {
    this.context = context;
  }

  bake(): void {
    throw new Error("Furnace is overheat");
  }
}