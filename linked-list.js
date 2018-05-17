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
    if(position === 0) {
      this.insertFirst(value);
      return;
    }
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

function display(list) {
  let currNode = list.head;
  let displayList = currNode.value.toString();
  if (currNode === null) {
    throw new Error('list is empty');
  }
  while(currNode.next !== null) {
    displayList += ', ' + currNode.next.value.toString();
    currNode = currNode.next;
  }
  return displayList;
} 

function display2(list) {
  let currNode = list.head;
  if (currNode === null) {
    throw new Error('list is empty');
  }
  let displayList = '';
  let count = 0;
  while (currNode !== null) {
    displayList += `Position ${count} is: ${currNode.value}, `;
    currNode = currNode.next;
    count++;
  }
  return displayList;
}

function size(list) {
  let currNode = list.head;
  if (currNode === null) {
    throw new Error('list is empty');
  }
  let count = 0;
  while (currNode !== null) {
    currNode = currNode.next;
    count++;
  }
  return count;
}

function isEmpty(list) {
  if (list.head === null) {
    return 'Empty list fool';
  } else {
    return 'You have a list!';
  }
}


function findPrevious(list, value) {
  if (list.head === null) {
    throw new Error('list is empty');
  }

  if(list.head.value === value) {
    throw new Error('Nothing before me');
  }
  let currNode = list.head;
  while (currNode.next !== null && currNode.next.value !== value) {
    currNode = currNode.next;
  }
  return currNode.value;
}

function findLast(list) {
  if (list.head === null) {
    throw new Error('list is empty');
  }

  let currNode =list.head;

  if(currNode.next === null) {
    return currNode.value;
  }

  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode.value;
}

// Reverse a list
// Write an algorithm to reverse a linked list. The runtime complexity of your algorithm should be linear O(n). For this exercise, notice, we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly-linked list. In other words, all pointers should point backward. BONUS: Solve this problem using recursive algorithm (and vice versa).

function reverse(list) {
  let currNode = list.head;
  let previousNode = null;
  let placeholderNode;

  //loop through the list and point currNode.next value to previousNode. At currNode = null we need to set as list.head. At current list.head need to set next to null.
  while ((currNode !== null)) {
    placeholderNode = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = placeholderNode;
  }
  list.head=previousNode;
  // if (currNode === null) {
  //   console.log('Item not found');
  //   return;
  // }
  // previousNode.next = currNode.next;
  return list;
}


// Creating a singly linked list
function main () {
  let myList = new LinkedList();
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');//LinkedList { head: _Node { value: 'Apollo', next: null } }
  SLL.insertLast('Boomer');
  // LinkedList {
  //   head: _Node { value: 'Apollo', next: _Node { value: 'Boomer', next: null } } }
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Athena','Boomer');
  SLL.insertAfter('hotdog','Helo');
  SLL.insertAt('Kat', 3);
  // SLL.insertAfter('Sarah', 'Helo');
  // SLL.insertAt('Sarah', 0);

  console.log(display(SLL));
  console.log(size(SLL));
  // console.log(isEmpty(myList));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Husker'));
  // console.log(findLast(SLL));
  // console.log(findLast(myList));
  console.log(reverse(SLL));
}

main();
// Using the insertAt() method insert Kat in the 3rd position of the list
// Remove Tauhida from the list
module.exports = LinkedList;
