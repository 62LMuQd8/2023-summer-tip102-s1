import { TreeService } from "./treeService.js";

let tree1 = new TreeService([4,2,7,1,3,6,9]);
let tree2 = new TreeService([2,1,3]);
let tree3 = new TreeService([]);

console.log('Before inversion...');
TreeService.print(tree1);
TreeService.print(tree2);
TreeService.print(tree3);

tree1.invertTree();
tree2.invertTree();
tree3.invertTree();

console.log();

console.log('After inversion...');
TreeService.print(tree1);
TreeService.print(tree2);
TreeService.print(tree3);