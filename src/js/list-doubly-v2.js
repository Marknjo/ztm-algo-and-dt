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

  pop() {
    // no list
    if (!this.#head) {
      return undefined;
    }

    /// There are nodes in the list

    // only one node
    if (this.length === 1) {
      let currentNode = this.#head;
      this.length--;
      this.#head = null;
      this.#tail = null;
      return currentNode;
    }

    // more than one node
    let poppedNode = this.#tail;

    this.#tail = this.#tail.prev;
    this.#tail.next = null;
    poppedNode.prev = null;
    this.length--;

    return poppedNode;
  }

  shift() {
    // has no node
    if (!this.#head) return undefined;

    // has only one node
    if (this.length === 1) {
      let poppedNode = this.#head;
      this.#head = null;
      this.#tail = null;
      this.length--;
      return poppedNode;
    }

    // has more than one node
    const poppedNode = this.#head;
    this.#head = poppedNode.next;
    this.#head.prev = null;
    poppedNode.next = null;

    this.length--;

    return poppedNode;
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
list
  .push(-300)
  .push(-200)
  .push(-100)
  .push(100)
  .push(200)
  .push(300)
  .push(400)
  .push(500)
  .push(600)
  .push(700)
  .push(800)
  .push(999);

console.log(list);

console.log(list.printList());

console.log("\n\n--------------POP METHOD--------------");

console.log(list.pop());
console.log(list.pop());
console.log(list);

console.log(list.printList());

console.log("\n\n--------------SHIFT METHOD--------------");
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list);

console.log(list.printList());
