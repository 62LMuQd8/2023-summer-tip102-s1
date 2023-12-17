// read CodePath's explanation: https://guides.codepath.org/compsci/Remove-Linked-List-Elements
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

  removeWithTempNode(val) {
    let tempNode = new ListElement(null);
    let currNode = null;
    // tempNode.next always points to actual head of linked list
    tempNode.next = this.head;
    // current pointer starts at temp node just before head
    // current pointer points to current node, and current nodes are never removed
    // therefore, current nodes act as anchors,
    // similarly, tempNode acts as an anchor to the head of linked list
    currNode = tempNode;
    // keep removing and moving towards end of linked list
    // until there are no more next nodes to remove
    while (currNode.next !== null) {
      // if next node is to be removed
      if (currNode.next.data === val) {
        // remove next node
        currNode.next = currNode.next.next;
      } else {
        // else move current pointer to next non-removable node
        currNode = currNode.next;
      }
    }
    this.head = tempNode.next;
    return this.toString();
  }

  removeWithRecursion(val) {
    // this assignment is necessary for the case when head node is to be removed
    this.head = this.recursion(this.head, val);
    return this.toString();
  }

  recursion(headNode, val) {
    // if reached end of linked list, return null node
    if (headNode === null) return null;
    // recursively call recursion function to remove nodes
    headNode.next = this.recursion(headNode.next, val);
    // this is where removal takes place
    // if current node is equal to val, return curent node's next node, else return current node
    // to be assigned to the next pointer of the node ahead of current node
    return headNode.data == val ? headNode.next : headNode;
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