'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedLast {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    if(this.head === null) {
      this.insertFirst(value);
    } else {
      let tmpNode = this.head;
      while(tmpNode.next !== null) {
        tmpNode = tmpNode.next;
      }
      tmpNode.next = new _Node(value, null);
    }
  }

  remove(value) {
    if (this.head === null) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null && currNode.value !== value)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  find(value) {
    let currNode = this.head;
    if(!this.head) {
      return null;
    }

    while (currNode.value !== value) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

}