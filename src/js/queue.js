class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  #top = 0;
  #bottom = 0;
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
    this.length++;

    return this;
  }

  dequeue() {}
}

const queue = new Queue();

//["Charlie", "Ella", "Rachel", "Ethan", "Avery", "Max", "Olivia", "Kaia", "Samantha", "Oscar"]

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
