function listNode(val) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let sum = l1.val + l2.val;
  let next1 = l1.next;
  let next2 = l2.next;
  let l3 = new ListNode(sum % 10);
  let node = l3;

  sum = Math.floor(sum / 10);
  while (next1 || next2 || sum !== 0) {
    sum += (next1 ? next1.val : 0) + (next2 ? next2.val : 0);
    node.next = new listNode(sum % 10);
    node = node.next;
    next1 = next1 ? next1.next : null;
    next2 = next2 ? next2.next : null;
    sum = Math.floor(sum / 10);
  }

  return l3;
}
