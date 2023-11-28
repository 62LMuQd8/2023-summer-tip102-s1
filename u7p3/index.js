import { TreeService } from "./treeService.js";

let tree1 = new TreeService([3,0,0]);
let tree2 = new TreeService([0,3,0]);
let tree3 = new TreeService([1]);

// validating input
console.log('Validating input...')
tree1.printLevelOrder();
tree2.printLevelOrder();
tree3.printLevelOrder();

console.log()

// data
console.log('Data...')
console.log(tree1.distributeCoins());
console.log(tree2.distributeCoins());
console.log(tree3.distributeCoins());