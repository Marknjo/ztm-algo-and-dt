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
    this.#initList(value, newNode);
  }

  prepend(value) {
    const newNode = new Node(value);

    // handle empty list
    if (this.length === 0) {
      this.#initList(value, newNode);
      return this.values();
    }

    // handle list with head
    const currentHeadNode = this.#head;
    this.#head = newNode.head;
    this.#head.next = currentHeadNode;
    this.length++;

    return this.values();
  }

  append(value) {
    const newNode = new Node(value);
    // Handle list was initialize without default values
    if (this.length === 0) {
      this.#initList(value, newNode);
      return this.values();
    }

    /// List was initializes with default values
    this.#tail.next = newNode.head;
    this.#tail = newNode.head;

    this.length++;
    return this.values();
  }

  values() {
    let listItem = [];
    let nextList = this.#head;

    // Add values till next is null
    while (nextList.next) {
      listItem.push(nextList.value);
      nextList = nextList.next;
    }

    // Add tail item to the collection
    listItem.push(this.#tail.value);

    return listItem;
  }

  #initList(value, newNode) {
    this.#head = newNode.head;

    this.#tail = this.#head;
    this.length = value ? 1 : 0;
  }
}

const list = new List(12);

list.append(10);
list.append(2);
list.append(4);
list.prepend(5);
list.prepend(-1);

console.log(list.values(), list.length);
console.log(list.showList());
