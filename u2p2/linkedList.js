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

  // this is known as Floyd's cycle finding algorithm or hare & tortoise problem
  // the key is to use modular arithmetic to derive correct equation to solve, ie,
  //
  // nSh + h is congruent to nSt + t mod C, where,
  //
  // n is the number of iterations
  // Sh is the step size of the hare
  // h is the starting node of the hare
  // St is the step size of the tortoise
  // t is the starting node of the tortoise
  // C is the length of the cycle
  //
  // the above equation is optimized for linked list cycle detection when setting
  // Sh = 2, St = 1, h = 0, t = 0, such that, n is congruent to 0 mod C
  //
  // this means that when fast & slow pointers start at the same node (head),
  // and fast pointer (hare) moves twice as fast as slow pointer (tortoise),
  // convergence to a common node is guaranteed,
  // and the number of iterations to converge on a common node
  // is always a multiple of the cycle length
  //
  // read here for details: https://math.stackexchange.com/a/2537297
  //
  // two pointer method is an optimal solution to detecting cycles in linked lists
  // however, there are a couple more noteworthy and more intuitive solutions: hashing and brute force
  //
  // brute force
  //    time complexity - O(n^2)
  //    space complexity - O(1)
  //    intuitive to understand and implement, but worst performing
  //
  // hashing
  //    time complexity - O(n)
  //    space complexity - O(n)
  //    intuitive to understand and implement, improves upon brute force method
  //
  // Floyd's cycle finding algorithm
  //    time complexity - O(n)
  //    space complexity - O(1)
  //    best performing, but requires understanding of math behind algorithm
  //
  // read here for details https://medium.com/swlh/floyds-cycle-detection-algorithm-32881d8eaee1
  //
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