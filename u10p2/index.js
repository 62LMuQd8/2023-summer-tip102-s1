import { TreeService } from "./treeService.js";

let tree1 = new TreeService([3,5,1,6,2,0,8,null,null,7,4]);
let tree2 = new TreeService([3,5,1,6,2,0,8,null,null,7,4]);
let tree3 = new TreeService([1,2]);

// validating input
console.log('Validating input...')
tree1.printLevelOrder();
tree2.printLevelOrder();
tree3.printLevelOrder();

console.log()

// data
console.log('Data...')
console.log(tree1.lowestCommonAncestor(5, 1));
console.log(tree2.lowestCommonAncestor(5, 4));
console.log(tree3.lowestCommonAncestor(1, 2));