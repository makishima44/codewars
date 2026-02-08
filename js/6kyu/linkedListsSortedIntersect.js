// Task: Linked Lists - Sorted Intersect
// Link: https://www.codewars.com/kata/55e67e44bf97fa66900000a0/train/javascript

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedIntersect(first, second) {
  let dummy = new Node(0);
  let tail = dummy;
  let a = first;
  let b = second;

  let lastAdded = null;

  while (a !== null && b !== null) {
    if (a.data < b.data) {
      a = a.next;
    } else if (a.data > b.data) {
      b = b.next;
    } else {
      if (lastAdded !== a.data) {
        tail.next = new Node(a.data);
        tail = tail.next;
        lastAdded = a.data;
      }
      a = a.next;
      b = b.next;
    }
  }

  return dummy.next;
}
