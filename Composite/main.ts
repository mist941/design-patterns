import {GroupOfLeaf, Leaf} from './Tree';

const tree: GroupOfLeaf = new GroupOfLeaf(50);
tree
  .add(new Leaf(5))
  .add(new Leaf(15))
  .add(new Leaf(4));

console.log(tree);

tree.incrementDigit();
console.log(tree);

tree.decrementDigit();
console.log(tree);