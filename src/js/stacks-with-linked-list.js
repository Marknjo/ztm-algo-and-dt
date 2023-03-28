class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  #first = null;
  #last = null;
  size = 0;

  push(value) {
    if (value === "" || typeof value === "undefined") return undefined;

    let newNode = new Node(value);
    this.size++;
    if (!this.#first) {
      this.#first = newNode;
      this.#last = newNode;
      return this.size;
    }

    newNode.next = this.#first;
    this.#first = newNode;

    return this.size;
  }

  pop() {
    if (!this.#first) return null;

    let currentHead = this.#first;
    if (this.size === 1) this.#last = null;

    this.#first = this.#first.next;
    this.size--;

    return currentHead;
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
stack.push("BET");
stack.push("Twitter");
stack.push("LinkedIn");

console.log(stack.printStack());

console.log("\n\n--------------POP METHOD--------------");

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.push("YouTube");
stack.push("Twitch");
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack.printStack());
