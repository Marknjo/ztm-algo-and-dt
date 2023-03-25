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

  get(index) {
    // case no value/index
    if (index === "" || typeof index === "undefined") return undefined;

    // case index is less than 0 or greater than length
    // @TODO: these two cases warrant throwing errors - invalid index
    if (index < -1 || index > this.length) return undefined;

    // Is valid index

    // case index is 0
    if (index === 0) return this.#head;

    // case index is equal to length
    if (index === this.length || index === -1) return this.#tail;

    // case how to traverse the list
    const listMidLen = Math.floor(this.length / 2);
    let foundNode;

    // traverse
    switch (true) {
      // traverse from tail - index near tail | index > listMidLen
      case index > listMidLen:
        foundNode = this.#reverseTraverse(index);
        break;

      // traverse from head - index near head | index < listMidLen
      // is half the list - find default
      default:
        foundNode = this.#forwardTraverse(index);
        break;
    }

    return foundNode || null;
  }

  set(index, value) {
    // value | index is empty
    let foundNode = this.get(index);

    if (value === "" || typeof value === "undefined" || !foundNode)
      return false;

    // nodeFound
    foundNode.val = value;

    return true;
  }

  push(value) {
    if (value === "" || typeof value === "undefined") return undefined;

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

  unshift(value) {
    // no value supplied
    if (value === "" || typeof value === "undefined") return undefined;

    // value is not empty
    let newNode = new Node(value);
    this.length++;

    // first time
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;

      return this;
    }

    // there are nodes in the list
    this.#head.prev = newNode;
    newNode.next = this.#head;
    this.#head = newNode;
    return this;
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

  #reverseTraverse(index) {
    let current = this.#tail;
    let count = this.length - 1;

    while (current.prev) {
      if (index === count) {
        return current;
      }
      count--;
      current = current.prev;
    }
    return false;
  }

  #forwardTraverse(index) {
    let current = this.#head;
    let count = 0;

    while (current.next) {
      if (index === count) {
        return current;
      }
      count++;
      current = current.next;
    }
    return false;
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

console.log("\n\n--------------UNSHIFT METHOD--------------");
list.unshift(50).unshift(25);

console.log(list);

console.log(list.printList());

console.log("\n\n--------------GET METHOD--------------");

console.log(list.get(6)); // Expects: 500
console.log(list.get(2)); // Expects: 100
console.log(list.get(-1)); // Expects: 700

console.log(list);

console.log(list.printList());

console.log("\n\n--------------SET METHOD--------------");
console.log(list.set(0, 30));
console.log(list.set(6, 550));

console.log(list);

console.log(list.printList());
