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

    return this.values();
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
    return this.values();
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
    const foundNode = this.#transverse(index);
    return foundNode ? foundNode.value : foundNode;
  }

  insert(index, value) {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }

    /// Limit transversal for:
    // First Item
    if (index === 0) {
      return this.prepend(value);
    }

    // & Last item
    if (index === this.length - 1) {
      return this.append(value);
    }

    /// Find between head & tail
    const insertPosNode = this.#transverse(index);

    const newNode = new Node(value);
    // Swap nodes
    newNode.prev = insertPosNode.prev;
    newNode.next = insertPosNode;
    insertPosNode.prev.next = newNode;
    this.length++;

    return this.values();
  }

  delete(index) {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }

    /// Limit transversal for:
    // First Item
    if (index === 0) {
      this.#head = this.#head.next;
      this.#head.prev = null;
      this.length--;
      return this.values();
    }

    // & Last item
    if (index === this.length - 1) {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
      this.length--;

      return this.values();
    }

    /// Find between head & tail
    const deleteNode = this.#transverse(index);

    // Could not find the node
    if (!deleteNode) return deleteNode;

    /// Disconnect the node from the link
    const prevNode = deleteNode.prev;
    const nextNode = deleteNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;

    // Return deleted node
    return deleteNode;
  }

  reverse() {
    if (this.length === 0 || this.length === 1) {
      return this.values();
    }

    /// Reverse
    let firstLink = this.#head;
    this.#tail = firstLink;

    let currentLink = firstLink.next;

    while (currentLink) {
      /// Prep next link
      let nextLink = currentLink.next;

      currentLink.prev = nextLink;
      currentLink.next = firstLink;

      firstLink = currentLink;
      currentLink = nextLink;
    }

    this.#head = firstLink;
    this.#head.prev = null;
    this.#tail.next = null;

    return this.values();
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
        return currentNode;
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

console.log(doubly.lookup(6));

// console.log(doubly.delete(5));
// console.log(doubly.values(), " Length: ", doubly.length);
// console.log(doubly.insert(3, 1));
doubly.insert(3, 1);

console.log(doubly.values(), " Length: ", doubly.length);

console.log(doubly.reverse());
