class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Implemented Queues using Doubly links
 */
class Queue {
  #first = null;
  #last = null;
  length = 0;

  peek() {
    return this.#first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.#first = newNode;
      this.#last = newNode;

      this.length++;
      return this;
    }

    let currentBottom = this.#last;
    this.#last = newNode;
    this.#last.next = currentBottom;
    this.#last.next.prev = this.#last;

    this.length++;

    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.#first = null;
      this.#last = null;
      this.length--;
      return this;
    }

    this.#first = this.#first.prev;
    this.#first.next = null;

    this.length--;
    return this;
  }
}

const queue = new Queue();

//["Charlie", "Ella", "Rachel", "Ethan", "Avery", "Max", "Olivia", "Kaia", "Samantha", "Oscar"]

/// Enqueue tests
queue.enqueue("Charlie");
queue.enqueue("Ella");
queue.enqueue("Rachel");
queue.enqueue("Ethan");
queue.enqueue("Avery");
queue.enqueue("Max");
queue.enqueue("Olivia");
queue.enqueue("Kaia");
queue.enqueue("Samantha");
queue.enqueue("Oscar");

console.log(queue.peek());
console.log(queue);

/// Dequeue tests
console.log("\n----------------------DEQUEUE----------------------\n");

queue.dequeue();
console.log(queue.peek()); // Expects Ella

queue.dequeue();
console.log(queue.peek()); // Expects Rachel

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.peek()); // Expects Ethan

console.log(queue);
