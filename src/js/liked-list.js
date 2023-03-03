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

  lookup(value) {
    let parentNode = this.#head;

    /// Search for all values minus tail
    while (parentNode.next !== null) {
      if (parentNode.value === value) {
        return value;
      }
      parentNode = parentNode.next;
    }

    /// Check last item in the entry
    if (this.#tail.value === value) {
      return value;
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
    let count = 1;

    while (count <= index) {
      if (count === index - 1) {
        newNode.head.next = currentNode.next;
        currentNode.next = newNode.head;
        this.length++;
        break;
      }
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

    // remove first node
    if (value === this.#head.value) {
      this.#head.next = this.#head.next;
      this.#head = this.#head.next;
      return this.values;
    }

    let currentNode = this.#head;
    let prevNode = this.#head;

    while (true) {
      if (currentNode.value === value) {
        // remove last node
        if (currentNode.value === this.#tail.value) {
          prevNode.next = null;
          this.#tail = prevNode;
          break;
        }

        prevNode.next = currentNode.next;
        break;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return this.values;
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

  showList() {
    return {
      list: this.#head,
      length: this.length,
    };
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
list.prepend(5);

// console.log(list.lookup(4));

list.insert(2, 20);
list.insert(6, 114);
console.log(list.values(), list.length);
// console.log(list.showList());
list.deleteByValue(4);
list.deleteByValue(5);
list.deleteByValue(5);

console.log(list.values(), list.length);
console.log(list.showList());
