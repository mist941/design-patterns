import {ICalculator} from './types';
import {Calculator} from './Calculator';

export class CalculatorCacheProxy implements ICalculator {
  private cache: Map<string, number> = new Map();
  private calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  private getCachedData(firstNumber: number, secondNumber: number, operator: string): number | undefined {
    return this.cache.get(`${firstNumber}${operator}${secondNumber}`);
  }

  private cacheData(firstNumber: number, secondNumber: number, operator: string, result: number): void {
    this.cache.set(`${firstNumber}${operator}${secondNumber}`, result);
  };

  add(firstNumber: number, secondNumber: number): number {
    const cachedData = this.getCachedData(firstNumber, secondNumber, "+");
    if (cachedData) return cachedData;

    const result = this.calculator.add(firstNumber, secondNumber);
    this.cacheData(firstNumber, secondNumber, "+", result);
    return result;
  }

  divide(firstNumber: number, secondNumber: number): number {
    const cachedData = this.getCachedData(firstNumber, secondNumber, "/");
    if (cachedData) return cachedData;

    const result = this.calculator.divide(firstNumber, secondNumber);
    this.cacheData(firstNumber, secondNumber, "/", result);
    return result;
  }

  multiply(firstNumber: number, secondNumber: number): number {
    const cachedData = this.getCachedData(firstNumber, secondNumber, "*");
    if (cachedData) return cachedData;

    const result = this.calculator.multiply(firstNumber, secondNumber);
    this.cacheData(firstNumber, secondNumber, "*", result);
    return result;
  }

  subtract(firstNumber: number, secondNumber: number): number {
    const cachedData = this.getCachedData(firstNumber, secondNumber, "-");
    if (cachedData) return cachedData;

    const result = this.calculator.subtract(firstNumber, secondNumber);
    this.cacheData(firstNumber, secondNumber, "-", result);
    return result;
  }
}