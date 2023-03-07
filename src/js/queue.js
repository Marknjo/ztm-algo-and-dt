class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = value;
  }
}

class Queue {
  #top = 0;
  #bottom = 0;
  length = 0;

  peek() {
    return this.#top;
  }

  enqueue(value) {}

  dequeue() {}
}

const queue = new Queue();
