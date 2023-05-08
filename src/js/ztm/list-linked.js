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
    this.#initList(newNode);
  }

  prepend(value) {
    const newNode = new Node(value);
    let currentHeadNode = this.#head;

    // Handle empty list
    if (this.length === 0) {
      this.#initList(newNode);
      return this.values();
    }

    // handle list with head
    this.#head = newNode.head;
    this.#head.next = currentHeadNode;
    this.length++;

    return this.values();
  }

  append(value) {
    const newNode = new Node(value);

    // Handle list was initialize without default values
    if (this.length === 0) {
      this.#initList(newNode);
      return this.values();
    }

    // List was initialized with default values
    this.#tail.next = newNode.head;
    this.#tail = newNode.head;
    this.length++;

    return this.values();
  }

  lookup(value) {
    let parentNode = this.#head;

    // Search for all values till tail.
    while (parentNode !== null) {
      if (parentNode.value === value) {
        return value;
      }

      parentNode = parentNode.next;
    }

    return false;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.#head;
    let prevNode = null;
    let count = 1;

    while (count <= index) {
      if (count === index) {
        newNode.head.next = currentNode;
        prevNode.next = newNode.head;
        this.length++;
        break;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    return this.values();
  }

  deleteByValue(value) {
    if (!this.lookup(value)) {
      return undefined;
    }

    this.length--;

    // Remove first node
    if (value === this.#head.value) {
      this.#head.next = this.#head.next;
      this.#head = this.#head.next;
      return this.values();
    }

    let currentNode = this.#head;
    let prevNode = null;

    while (true) {
      if (currentNode.value === value) {
        // Remove last node
        if (currentNode === this.#tail) {
          prevNode.next = null;
          this.#tail = prevNode;
          break;
        }

        // Remove in between head and tail nodes
        prevNode.next = currentNode.next;
        break;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return this.values();
  }

  delete(index) {
    if (index > this.length || index <= 0) {
      return undefined;
    }

    // Remove first node
    if (index === 1) {
      this.#head.next = this.#head.next;
      this.#head = this.#head.next;
      this.length--;
      return this.values();
    }

    let currentNode = this.#head;
    let prevNode = null;
    let count = 1;

    while (count <= index) {
      if (count === index) {
        // Remove last node
        if (currentNode === this.#tail) {
          prevNode.next = null;
          this.#tail = prevNode;
          break;
        }

        // Remove in between head and tail nodes
        prevNode.next = currentNode.next;
        break;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    this.length--;
    return this.values();
  }

  values() {
    let listItem = [];
    let nextList = this.#head;

    // Add values till next is null
    while (nextList) {
      listItem.push(nextList.value);
      nextList = nextList.next;
    }

    return listItem;
  }

  showList() {
    return {
      list: this.#head,
      length: this.length,
    };
  }

  #initList(newNode) {
    this.#head = newNode.head;
    this.#tail = newNode.head;
    this.length = 1;
  }
}

const list = new List(12);

list.append(10);
list.append(2);
list.append(4);
list.prepend(5);
list.prepend(-1);
list.prepend(5);

console.log(list.lookup(4));

list.insert(2, 20);
list.insert(6, 114);
console.log(list.values(), list.length);
// console.log(list.showList());
list.delete(9);
list.delete(6);
list.deleteByValue(5);
// list.deleteByValue(5);

console.log(list.values(), list.length);
console.log(list.showList());
