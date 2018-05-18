'use strict';

// Mystery program
// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the runtime of this algorithm?

function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//This function sets the current node to the list head. While the current value is not null we let newNode = the current node. Now while newNode.next is not null we check to see if the newNode.next value is equal to the current value and dreplace it iterating on through the list if it does not match. when we exit the inner while loop we set the current node to the next node in the list and loop over again.

//In short, this is a nested loop and thus has a complexity of O(n^2) (polynomial).