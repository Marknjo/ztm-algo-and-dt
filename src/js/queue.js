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
  #top = null;
  #bottom = null;
  length = 0;

  peek() {
    return this.#top;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.#top = newNode;
      this.#bottom = newNode;

      this.length++;
      return this;
    }

    let currentBottom = this.#bottom;
    this.#bottom = newNode;
    this.#bottom.next = currentBottom;
    this.#bottom.next.prev = this.#bottom;

    this.length++;

    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    this.#top = this.#top.prev;
    this.#top.next = null;

    this.length--;
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
console.log(queue.peek()); // Expects Ethan

console.log(queue);
