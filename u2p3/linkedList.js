// read CodePath's explanation: https://guides.codepath.org/compsci/Reverse-Linked-List
//
// code template and explanation found here:
// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
import { ListElement } from './listElement.js'
export class LinkedList {
  constructor(initData) {
    this.head = null;
    this.length = 0;
    for (const data of initData) {
      this.add(data);
    }
  }

  add(data) {
    let listElement = new ListElement(data);
    // if the linked list is empty
    if (!this.head) {
      this.head = listElement;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = listElement;
    }
    this.length++;
  }

  reverseList() {
    let prevNode = null;
    let currNode = this.head;
    while (currNode !== null) {
      // get next node
      let nextNode = currNode.next;
      // switch next arrow from next node
      // to previous node
      currNode.next = prevNode;
      // sliding prevNode and currNode to right by one step
      // previous node points to current node
      // current node points to next node
      prevNode = currNode;
      currNode = nextNode;
    }
    // prevNode is now pointing to head
    // (currNode is pointing to null, and nextNode is not assigned b/c not stepping into while loop)
    this.head = prevNode;
    return this.toString();
  }

  // helper print function to validate implementation
  toString() {
    let arrayEquivalent = [];
    let current = this.head;
    while (current !== null) {
      arrayEquivalent.push(current.data);
      current = current.next;
    }
    return JSON.stringify(arrayEquivalent);
  }
}