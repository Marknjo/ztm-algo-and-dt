class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
  #tail;
  #head;
  length = 0;

  constructor(value) {
    const newNode = new Node(value);
    this.#initNode(value, newNode);
  }

  append(value) {
    const newNode = new Node(value);

    // no initial value
    if (!this.#head.value) {
      this.#initNode(value, newNode);
      return this.values();
    }

    /// Append
    this.#tail.next = newNode;
    newNode.prev = this.#tail;

    this.#tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    // Check if list was initialized with a value;
    if (!this.#head.value) {
      this.#initNode(value, newNode);
      return this.values();
    }

    /// add a new node
    this.#head.prev = newNode;
    newNode.next = this.#head;

    this.#head = newNode;

    this.length++;
  }

  values() {
    let currentNode = this.#head;
    const listValues = [];

    while (currentNode.next) {
      listValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    this.#tail.value && listValues.push(this.#tail.value);

    return listValues;
  }

  #initNode(value, newNode) {
    this.#head = newNode;
    this.#tail = newNode;
    this.length = value || 0;
  }
}

const doubly = new DoublyList(16);

doubly.prepend(2);
doubly.prepend(5);
doubly.prepend(15);
doubly.append(20);
doubly.append("Happy");
doubly.append(30);

console.log(doubly.values());
