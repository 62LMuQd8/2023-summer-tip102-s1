import { TreeService } from "./treeService.js";
import { DataElement } from './dataElement.js';

let tree1 = generateTree1()
let tree2 = generateTree2();
let tree3 = generateTree3();
let tree4 = generateTree4();
let tree5 = generateTree5();

// validating input
console.log('Validating input...')
console.log(tree1.getLevelOrder());
console.log(tree2.getLevelOrder());
console.log(tree3.getLevelOrder());
console.log(tree4.getLevelOrder());

console.log()

// data
console.log('Data...')
console.log(tree1.pathSumBF(22));
console.log(tree2.pathSumBF(22));
console.log(tree3.pathSumBF(8));
console.log(tree4.pathSumBF(0));
console.log(tree5.pathSumBF(10));

console.log()

console.log(tree1.pathSumHM(22));
console.log(tree2.pathSumHM(22));
console.log(tree3.pathSumHM(8));
console.log(tree4.pathSumHM(0));
console.log(tree5.pathSumHM(10));

function generateTree1() {
    // [5,4,8,11,null,13,4,7,2,null,null,null,1]
    let root = new DataElement(5);
    root.left = new DataElement(4);
    root.right = new DataElement(8);
    root.left.left = new DataElement(11);
    root.left.left.left = new DataElement(7);
    root.left.left.right = new DataElement(2);
    root.right.left = new DataElement(13);
    root.right.right = new DataElement(4);
    root.right.right.right = new DataElement(1);
    let tree = new TreeService();
    tree.root = root;
    return tree;
}

function generateTree2() {
    // [5,4,8,11,null,13,4,7,2,null,null,5,1]
    let root = new DataElement(5);
    root.left = new DataElement(4);
    root.right = new DataElement(8);
    root.left.left = new DataElement(11);
    root.left.left.left = new DataElement(7);
    root.left.left.right = new DataElement(2);
    root.right.left = new DataElement(13);
    root.right.right = new DataElement(4);
    root.right.right.left = new DataElement(5);
    root.right.right.right = new DataElement(1);
    let tree = new TreeService();
    tree.root = root;
    return tree;
}

function generateTree3() {
    // [10,5,-3,3,2,null,11,3,-2,null,1]
    let root = new DataElement(10);
    root.left = new DataElement(5);
    root.right = new DataElement(-3);
    root.left.left = new DataElement(3);
    root.left.right = new DataElement(2);
    root.left.left.left = new DataElement(3);
    root.left.left.right = new DataElement(-2);
    root.left.right.right = new DataElement(1);
    root.right.right = new DataElement(11);
    let tree = new TreeService();
    tree.root = root;
    return tree;
}

function generateTree4() {
    // []
    let tree = new TreeService();
    return tree;
}

function generateTree5() {
    let root = new DataElement(10);
    root.left = new DataElement(5);
    root.left.left = new DataElement(-5);
    root.left.left.left = new DataElement(5);
    root.left.left.left.left = new DataElement(-5);
    let tree = new TreeService();
    tree.root = root;
    return tree;
}