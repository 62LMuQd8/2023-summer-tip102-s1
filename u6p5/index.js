import { TreeService } from "./treeService.js";

let tree1 = TreeService.balancedBSTFromArray([-10,-3,0,5,9]);
let tree2 = TreeService.balancedBSTFromArray([1,3]);
let tree3 = TreeService.balancedBSTFromArray([1, 2, 3, 4, 5]);
let tree4 = TreeService.balancedBSTFromArray([1, 2, 3, 4, 5, 6, 7, 8]);
let tree5 = TreeService.balancedBSTFromArray([]);

TreeService.print(tree1);
TreeService.print(tree2);
TreeService.print(tree3);
TreeService.print(tree4);
TreeService.print(tree5);