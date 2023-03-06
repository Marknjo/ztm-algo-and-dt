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

  peek() {
    this.top;
  }

  // push(value){}
  // pop(){}
}

const stack = new Stack();

let firstItem = stack.peek();

console.log({ firstItem });
