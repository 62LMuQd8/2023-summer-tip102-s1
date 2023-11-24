import { LinkedList } from './linkedList.js';

// input lists are guaranteed to be sorted

const linkedList1 = new LinkedList([1,1,2]);
console.log(linkedList1.removeDuplicates());
console.log('length of linked list: ' + linkedList1.length);

const linkedList2 = new LinkedList([1,1,2,3,3]);
console.log(linkedList2.removeDuplicates());
console.log('length of linked list: ' + linkedList2.length);