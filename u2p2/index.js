import { LinkedList } from './linkedList.js';

const linkedList1 = new LinkedList([3,2,0,-4], 1);
console.log(linkedList1.printWithCycle());
console.log(linkedList1.hasCycle());

const linkedList2 = new LinkedList([1,2], 0);
console.log(linkedList2.printWithCycle());
console.log(linkedList2.hasCycle());

const linkedList3 = new LinkedList([1], -1);
console.log(linkedList3.printWithCycle());
console.log(linkedList3.hasCycle());