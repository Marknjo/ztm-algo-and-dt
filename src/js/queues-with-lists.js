class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  #first = null;
  #last = null;
  size = 0;

  enqueue(value) {
    if (value === "" || typeof value === "undefined") return undefined;

    let newNode = new Node(value);

    this.size++;
    if (!this.#first) {
      this.#first = newNode;
      this.#last = newNode;
      return this.size;
    }

    this.#last.next = newNode;
    this.#last = newNode;
    return this.size;
  }

  printQueue() {
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

let queue = new Queue();

console.log("--------------Enqueue METHOD--------------");

/// Google, Facebook, Amazon, BET, Twitter, LinkedIn
queue.enqueue("Google");
queue.enqueue("Facebook");
queue.enqueue("Amazon");
queue.enqueue("BET");
queue.enqueue("Twitter");
queue.enqueue("LinkedIn");

console.log(queue.printQueue());
