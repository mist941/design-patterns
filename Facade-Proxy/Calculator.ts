import {ICalculator} from './types';

export class Calculator implements ICalculator {
  add(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  divide(firstNumber: number, secondNumber: number): number {
    return firstNumber / secondNumber;
  }

  multiply(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }

  subtract(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }
}