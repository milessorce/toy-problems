function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

// SOLUTION ONE: O(n) space

// const containsCycle = node => {
//   if (node.checked) {
//     return true;
//   } else {
//     node.checked = true;
//   }
//   if (node.next !== null) {
//     return containsCycle(node.next);
//   } else {
//     return false;
//   }
// };


// SOLUTION TWO: O(1) space

const containsCycle = node => {
  let fastRunner = node;
  let slowRunner = node;
  while (fastRunner && fastRunner.next.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
    if (fastRunner === slowRunner) {
      return true;
    }
  }
  return false;
};

let myLinkedList = new LinkedListNode(5);
myLinkedList.next = new LinkedListNode(4);
myLinkedList.next.next = new LinkedListNode(3);
myLinkedList.next.next.next = new LinkedListNode(1);
console.assert(containsCycle(myLinkedList) === false, 'Linked list is not circular');

let myLinkedList2 = new LinkedListNode(5);
myLinkedList2.next = new LinkedListNode(4);
myLinkedList2.next.next = new LinkedListNode(3);
myLinkedList2.next.next.next = myLinkedList2;
console.assert(containsCycle(myLinkedList2) === true, 'Linked list is circular; last node points to first node');

let myLinkedList3 = new LinkedListNode(5);
myLinkedList3.next = new LinkedListNode(4);
myLinkedList3.next.next = new LinkedListNode(3);
myLinkedList3.next.next.next = myLinkedList3.next;
console.assert(containsCycle(myLinkedList2) === true, 'Linked list is circular; last node points to second node');
