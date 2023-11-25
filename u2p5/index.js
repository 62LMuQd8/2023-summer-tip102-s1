import { LinkedList } from './linkedList.js';

const linkedList1 = new LinkedList([1,2,6,3,4,5,6]);
console.log(linkedList1.removeWithTempNode(6));

const linkedList2 = new LinkedList([]);
console.log(linkedList2.removeWithTempNode(1));

const linkedList3 = new LinkedList([7,7,7,7]);
console.log(linkedList3.removeWithTempNode(7));

const linkedList4 = new LinkedList([1,2,6,3,4,5,6]);
console.log(linkedList4.removeWithRecursion(6));

const linkedList5 = new LinkedList([]);
console.log(linkedList5.removeWithRecursion(1));

const linkedList6 = new LinkedList([7,7,7,7]);
console.log(linkedList6.removeWithRecursion(7));