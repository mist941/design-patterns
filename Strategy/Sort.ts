import {IStrategy} from './Strategy';

export interface ISort {
  strategy: IStrategy;

  setStrategy(strategy: IStrategy): void;

  exec(arr: number[]): number[];
}

export class Sort implements ISort {
  strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }

  exec(arr: number[]): number[] {
    return this.strategy.exec(arr);
  }
}
