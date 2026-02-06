// Task: Linked Lists - Length & Count
// Link: https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let counter = 0;
  let current = head;

  while (current !== null) {
    counter++;
    current = current.next;
  }

  return counter;
}

function count(head, data) {
  let counter = 0;
  let current = head;

  while (current !== null) {
    if (current.data === data) {
      counter++;
    }
    current = current.next;
  }
  return counter;
}
