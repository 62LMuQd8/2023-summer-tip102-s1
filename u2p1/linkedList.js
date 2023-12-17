// read CodePath's explanation: https://guides.codepath.org/compsci/Remove-Duplicates-from-Sorted-List
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

  removeDuplicates() {
    // using two pointer method
    let slow = this.head;
    let fast = this.head;
    while (fast !== null) {
      // we count the number of nodes fast pointer is ahead of slow pointer
      // to figure out how many nodes are deleted
      let stepsAhead = 0;
      // if slow & fast pointers are pointing to different nodes with same value
      // then fast pointer can move one node ahead to delete current node fast pointer is pointing to
      // note: when slow & fast pointers are pointing to same node, while loop always get stepped into
      while (fast !== null && slow.data === fast.data) {
        fast = fast.next;
        stepsAhead++;
      }
      // duplicate nodes are removed from linked list
      // when fast pointer is 2 nodes or more ahead of slow pointer
      slow.next = fast;
      this.length -= stepsAhead - 1;
      // slow pointer catches up to fast pointer and process repeats until end of linked list
      slow = fast;
    }
    return this.print();
  }

  // helper print function to validate implementation
  print() {
    let arrayEquivalent = [];
    let current = this.head;
    while (current !== null) {
      arrayEquivalent.push(current.data);
      current = current.next;
    }
    return JSON.stringify(arrayEquivalent);
  }
}