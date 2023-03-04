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

  prepend(value) {
    const newNode = new Node(value);

    // Check if list was initialized with a value;
    if (!this.#head.value) {
      console.log("entered", this.#head);

      this.#initNode(value, newNode);
      return this.values();
    }

    /// add a new node
    this.#head.prev = { ...newNode };
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

console.log(doubly.values());
