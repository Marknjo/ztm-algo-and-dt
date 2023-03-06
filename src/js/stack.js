class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  #top = null;
  #bottom = null;
  length = 0;

  peek() {
    return this.#top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.#top = newNode;
      this.#bottom = newNode;
      this.length++;
      return this;
    }

    let newBottomItem = this.#top;
    this.#top = newNode;
    this.#top.next = newBottomItem;
    this.length++;

    return this;
  }
  // pop(){}
}

const stack = new Stack();

stack.push("Google");
stack.push("Udemy");
stack.push("Mozilla");
stack.push("ReactJs");
const addValue5 = stack.push("Keystone");

console.log(addValue5);
let firstItem = stack.peek();
console.log({ firstItem: firstItem.value });
