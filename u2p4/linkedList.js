// code template and explanation found here:
// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
import { ListElement } from './listElement.js'
export class LinkedList {
  constructor(initData, pos) {
    this.head = null;
    this.length = 0;
    for (const data of initData) {
      this.add(data);
    }
    this.addCycle(pos);
  }

  addCycle(pos) {
    let tail = this.head;
    let current = this.head;
    if (pos < 0) return;
    while (tail.next !== null) {
      tail = tail.next;
    }
    if (pos > 0) {
      for (let i = 1; i <= pos; i++) {
        current = current.next;
      }
    }
    tail.next = current;
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

  // this problem (finding the node that connects the tail and cycle of linked list)
  // is a continuation of Floyd's cycle finding algorithm, and uses algebra and system of equations
  // for derivation and solution
  //
  // read here for details: https://medium.com/swlh/floyds-cycle-detection-algorithm-32881d8eaee1
  // CodePath solution w/ explanation: https://guides.codepath.org/compsci/Linked-List-Cycle-II
  getCycleStartNode() {
    let slow = this.head;
    let fast = this.head;
    // Floyd's cycle finding algorithm
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) break;
    }
    // exit function if no cycle found
    if (fast === null || fast.next === null) return null;
    // get node that connects tail and cycle
    // by moving either pointer from where they met in the cycle to the head
    // and then move both pointers at the same rate (1 node per iteration)
    // until both met again at the node that connects the tail and the cycle
    fast = this.head;
    while (fast !== slow) {
      fast = fast.next;
      slow = slow.next;
    }
    return fast.data;
  }

  hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
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

  toStringWithCycle() {
    let arrayEquivalent = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      arrayEquivalent.push({
        'currentData': current.data,
        'nextData': current.next === null ? null : current.next.data
      });
      current = current.next;
    }
    return JSON.stringify(arrayEquivalent);
  }
}