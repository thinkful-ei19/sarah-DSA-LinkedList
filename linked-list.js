'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
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

  insertBefore(value, key) {

    if(this.head.value === key) {
      this.insertFirst(value);
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null && currNode.value !== key)) {
      previousNode = currNode;
      currNode = currNode.next;
      // console.log(currNode, previousNode);
    }
    if (currNode === null) {
      console.log('Item to insert before not found');
      return;
    }
    previousNode.next = new _Node(value, currNode);
  }

  insertAfter(value, key) {
    
    let currNode = this.head;
    while (currNode !==null && currNode.value !==key) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      throw new Error('Item to insert after not found');
    }
    if(currNode !== null) {
      currNode.next = new _Node(value, currNode.next);
    }
  }

  insertAt(value, position) {
    let currNode = this.head;
    let previousNode = this.head;
    let count = 0;

    while (currNode.next !== null && count !== position) {
      previousNode = currNode;
      currNode = currNode.next;
      count++;
      console.log(count);
    }
    if (currNode === null) {
      throw new Error('Cannot insert at position');
    }
    previousNode.next = new _Node(value, currNode);
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

// Creating a singly linked list
function main () {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');//LinkedList { head: _Node { value: 'Apollo', next: null } }
  SLL.insertLast('Boomer');
  // LinkedList {
  //   head: _Node { value: 'Apollo', next: _Node { value: 'Boomer', next: null } } }
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  // SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  // SLL.insertAfter('Sarah', 'Helo');
  insertAt('Sarah', 2)
  console.log(SLL.find('Sarah'));
  console.log(SLL.find('Helo'));
}

main();
