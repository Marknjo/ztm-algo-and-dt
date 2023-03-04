class Node {
  head = {};

  constructor(value) {
    this.head = {
      value: value || null,
      next: null,
      prev: null,
    };
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
    this.#tail = newNode.head;
    this.length = value || 0;
  }
}

const doubly = new DoublyList();

console.log(doubly.values());
