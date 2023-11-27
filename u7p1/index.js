import { TreeService } from "./treeService.js";

let tree1 = new TreeService([3,9,20,null,null,15,7]);
let tree2 = new TreeService([1]);
let tree3 = new TreeService([]);

tree1.printLevelOrder();
tree2.printLevelOrder();
tree3.printLevelOrder();