class Node {
  head = {};

  constructor(value) {
    this.head = {
      value: value || null,
      next: null,
    };
  }
}

class List {
  #head = {};
  #tail = {};
  length = 0;

  constructor(value) {
    const newNode = new Node(value);
    this.#head = newNode.head;

    this.#tail = this.#head;
    this.length = value ? 1 : 0;
  }

  append(value) {
    const newNode = new Node(value);
    // Handle list was initialize without default values
    if (this.length === 0) {
      this.#head = newNode.head;
      this.#tail = newNode.head;

      this.length++;
      return this;
    }

    /// List was initializes with default values
    this.#tail.next = newNode.head;
    this.#tail = newNode.head;

    this.length++;
    return this;
  }
}

const list = new List(12);

list.append(10);
list.append(2);

console.log(list);
