import { TreeService } from "./treeService.js";
import { DataElement } from './dataElement.js';

let input1 = generateInput1()
let input2 = generateInput2();
let input3 = generateInput3();

// validating input
console.log('Validating input...')
input1.tree.printLevelOrder();
input2.tree.printLevelOrder();
input3.tree.printLevelOrder();

console.log();

// validating inputs
console.log('Validating input...')
console.log(input1.target)
console.log(input2.target)
console.log(input3.target)

console.log()

// data
console.log('Data...')
console.log(input1.tree.distanceK(input1.target, 2));
console.log(input2.tree.distanceK(input2.target, 3));
console.log(input3.tree.distanceK(input3.target, 1));

function generateInput1() {
    let input1 = {};
    let root = new DataElement(3);
    root.left = new DataElement(5);
    root.right = new DataElement(1);
    root.left.left = new DataElement(6);
    root.left.right = new DataElement(2);
    root.left.right.left = new DataElement(7);
    root.left.right.right = new DataElement(4);
    root.right.left = new DataElement(0);
    root.right.right = new DataElement(8);
    let tree = new TreeService();
    tree.root = root;
    input1.target = root.left;
    input1.tree = tree;
    return input1;
}

function generateInput2() {
    let input2 = {};
    let root = new DataElement(1);
    let tree = new TreeService();
    tree.root = root;
    input2.target = root;
    input2.tree = tree;
    return input2;
}

function generateInput3() {
    let input3 = {};
    let root = new DataElement(1);
    root.left = new DataElement(2);
    root.right = new DataElement(3);
    let tree = new TreeService();
    tree.root = root;
    input3.target = root;
    input3.tree = tree;
    return input3;
}