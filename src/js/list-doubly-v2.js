class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
  #head = null;
  #tail = null;
  length = 0;

  push(value) {
    if (value === "" || typeof value === "undefined") {
      console.log("entered");

      return undefined;
    }

    const newNode = new Node(value);
    this.length++;

    // has no nodes
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
      return this;
    }

    // has nodes
    this.#tail.next = newNode;
    newNode.prev = this.#tail;
    this.#tail = newNode;

    return this;
  }

  printList() {
    if (!this.#head) {
      return [];
    }

    if (this.length === 1) {
      return [this.#head.val];
    }

    let list = [];
    let currentNode = this.#head;

    while (currentNode.next) {
      list.push(currentNode.val);
      currentNode = currentNode.next;
    }

    list.push(this.#tail.val);

    return list;
  }
}

const list = new DoublyList();

console.log("--------------PUSH METHOD--------------");

/// 100, 200, 300, 600, 700, 800, 999
list.push(100);
list.push(200);
list.push(300);

console.log(list);

console.log(list.printList());
