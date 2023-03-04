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

  lookup(index) {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }

    /// Limit transversal for:
    // First Item
    if (index === 0) {
      return this.#head.value;
    }

    // & Last item
    if (index === this.length - 1) {
      return this.#tail.value;
    }

    /// Find between head & tail
    return this.#transverse(index);
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
    this.length = value ? 1 : 0;
  }

  #transverse(index) {
    let countIdx = 0;
    let currentNode = this.#head;

    while (currentNode.next) {
      if (countIdx === index) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
      countIdx++;
    }

    return undefined;
  }
}

const doubly = new DoublyList(16);

doubly.prepend(2);
doubly.prepend(5);
doubly.prepend(15);
doubly.append(20);
doubly.append("Happy");
doubly.append(30);

console.log(doubly.lookup(1));

console.log(doubly.values(), " Length: ", doubly.length);
