import {ISort, Sort} from './Sort';
import {BubbleSort, QuickSort} from './Strategy';

const sort: ISort = new Sort(new BubbleSort());
console.log(sort.exec([1, 4, 5, 2]));
sort.setStrategy(new QuickSort());
console.log(sort.exec([1, 4, 5, 2, 19, 3]));
