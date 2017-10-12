function ListNode(value) {
  this.value = value;
  this.next = null;
}

const mergeTwoLists = (l1, l2) => {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

let list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

let output = mergeTwoLists(list1, list2);
console.log(output);

