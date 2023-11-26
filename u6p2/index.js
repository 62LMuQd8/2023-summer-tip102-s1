import { TreeService } from "./treeService.js";

let tree1 = new TreeService([3,9,20,null,null,15,7]);
let tree2 = new TreeService([1,null,2]);
let tree3 = new TreeService([]);

console.log(tree1.maxDepth());
console.log(tree2.maxDepth());
console.log(tree3.maxDepth());