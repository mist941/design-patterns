import {ColdState, IState, OverheatingState, ReadyToBakeState} from "./State";

export interface IFurnace {
  state: IState;

  nextState(): void;

  bake(): void;
}

export class Furnace implements IFurnace {
  state: IState;

  constructor() {
    this.state = new ColdState(this);
  }

  nextState(): void {
    if (this.state instanceof ColdState) {
      this.state = new ReadyToBakeState(this);
    } else if (this.state instanceof ReadyToBakeState) {
      this.state = new OverheatingState(this);
    } else throw new Error("This is the last state");
  }

  bake(): void {
    this.state.bake();
  }
}