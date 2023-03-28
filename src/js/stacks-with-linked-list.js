class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  #first = null;
  #last = null;
  length = 0;

  push(value) {
    if (value === "" || typeof value === "undefined") return undefined;

    let newNode = new Node(value);
    this.length++;
    if (!this.#first) {
      this.#first = newNode;
      this.#last = newNode;
      return this;
    }

    newNode.next = this.#first;
    this.#first = newNode;

    return this;
  }

  printStack() {
    if (!this.#first) return [];

    let current = this.#first;
    let list = [];

    while (current.next) {
      list.push(current.value);
      current = current.next;
    }

    list.push(this.#last.value);

    return list;
  }
}

const stack = new Stack();

console.log("--------------PUSH METHOD--------------");

/// Google, Facebook, Amazon, BET, Twitter, LinkedIn
stack.push("Google");
stack.push("Facebook");
stack.push("Amazon");

console.log(stack.printStack());

console.log("--------------POP METHOD--------------");
