import { TreeService } from "./treeService.js";
import { DataElement } from './dataElement.js';

let tree1 = generateTree1();
let tree2 = generateTree2();
let tree3 = generateTree3();

console.log(tree1.inorderTraversal());
console.log(tree2.inorderTraversal());
console.log(tree3.inorderTraversal());

function generateTree1() {
    let root = new DataElement(1);
    let parent = root;
    parent.right = new DataElement(2);
    parent = parent.right;
    parent.left = new DataElement(3);
    let tree1 = new TreeService();
    tree1.root = root; 
    return tree1;
}

function generateTree2() {
    let tree2 = new TreeService();
    return tree2;
}

function generateTree3() {
    let root = new DataElement(1);
    let tree3 = new TreeService();
    tree3.root = root; 
    return tree3;
}