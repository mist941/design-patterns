import {Calculator} from './Calculator';
import {CalculatorCacheProxy} from './CalculatorProxy';

const calculator = new CalculatorCacheProxy(new Calculator());

console.log(calculator.add(5, 8));
