import { TreeService } from "./treeService.js";
import { DataElement } from './dataElement.js';

let tree1 = new TreeService([3,9,20,null,null,15,7]);
// tree too unbalanced for auto-generation, so create custom tree
let tree2 = generateTree2();
let tree3 = new TreeService([]);

console.log(tree1.minDepth());
console.log(tree2.minDepth());
console.log(tree3.minDepth());

function generateTree2() {
    let root = new DataElement(2);
    let parent = root;
    parent.right = new DataElement(3);
    parent = parent.right;
    parent.right = new DataElement(4);
    parent = parent.right;
    parent.right = new DataElement(5);
    parent = parent.right;
    parent.right = new DataElement(6);
    let tree2 = new TreeService();
    tree2.root = root; 
    return tree2;
}