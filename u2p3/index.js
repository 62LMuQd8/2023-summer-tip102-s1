import { LinkedList } from './linkedList.js';

const linkedList1 = new LinkedList([1,2,3,4,5]);
console.log(linkedList1.reverseList());

const linkedList2 = new LinkedList([1,2]);
console.log(linkedList2.reverseList());

const linkedList3 = new LinkedList([]);
console.log(linkedList3.reverseList());