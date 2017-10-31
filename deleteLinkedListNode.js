function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

const deleteLinkedListNode = node => {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    throw new Error('Cannot delete final node of list with this method');
  }
};

console.assert(a.next.value === 'B');
deleteLinkedListNode(b);
console.assert(a.next.value === 'C');