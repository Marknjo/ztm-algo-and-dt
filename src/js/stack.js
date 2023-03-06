class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top = null;
  bottom = null;
  length = 0;
}

const stack = new Stack();
