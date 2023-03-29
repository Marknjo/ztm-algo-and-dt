class QueueNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  #first = null;
  #last = null;
  size = 0;

  enqueue(value) {
    if (value === "" || typeof value === "undefined") return undefined;

    let newNode = new QueueNode(value);

    this.size++;
    if (!this.#first) {
      this.#first = newNode;
      this.#last = newNode;
      return this.size;
    }

    this.#last.next = newNode;
    this.#last = newNode;
    return this.size;
  }

  dequeue() {
    if (!this.#first) return undefined;

    let firstInQueue = this.#first;
    if (this.size === 1) {
      this.#last = null;
    }

    this.#first = this.#first.next;
    this.size--;
    return firstInQueue;
  }
}

class Node {
  left = null;
  right = null;
  constructor(val) {
    this.value = val;
  }
}

class BST {
  #root = null;

  insert(val) {
    if (val == "" || typeof val === "undefined") return undefined;

    let newNode = new Node(val);

    if (!this.#root) {
      this.#root = newNode;
      return this;
    }

    let current = this.#root;

    while (true) {
      let currentValue = current.value;
      if (val === currentValue) return undefined;

      // check left
      if (val < currentValue) {
        if (!current.left) {
          current.left = newNode;
          break;
        }

        current = current.left;
      }

      // check right
      if (val > currentValue) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }

    return this;
  }

  find(val) {
    if (val == "" || typeof val === "undefined") return undefined;

    if (!this.#root) return null;

    if (!this.#root.left && !this.#root.right) {
      return this.#root.value === val ? this.#root : null;
    }

    // more than one value in the tree

    let current = this.#root;
    let found = null;

    while (current && !found) {
      let currentValue = current.value;
      if (val === currentValue) found = current;

      // find left
      if (val < currentValue) {
        current = current.left;
      }

      // find right
      if (val > currentValue) {
        current = current.right;
      }
    }

    return found;
  }

  contains(val) {
    if (val == "" || typeof val === "undefined") return undefined;

    if (!this.#root) return false;

    if (!this.#root.left && !this.#root.right) {
      return this.#root.value === val ? true : false;
    }

    // more than one value in the tree

    let current = this.#root;

    while (true) {
      let currentValue = !!current?.value ? current.value : false;

      if (!currentValue) return false;

      if (val === currentValue) return true;

      // find left
      if (val < currentValue) {
        current = current.left;
      }

      // find right
      if (val > currentValue) {
        current = current.right;
      }
    }
  }

  BFT() {
    let node = this.#root,
      queue = [],
      data = [];

    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  BFTWithQueue() {
    let node = this.#root,
      queue = new Queue(),
      data = new Set();

    queue.enqueue(node);

    while (queue.size) {
      node = queue.dequeue().value;
      data.add(node.value);

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    return [...data];
  }
}

let tree = new BST();

console.log("--------------INSERT METHOD--------------");
//      10
//   6      15
// 3  8       20
console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(15));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.insert(20));

console.log("\n\n--------------SEARCH METHOD--------------");

console.log(tree.contains(7));
console.log(tree.find(5));
console.log(tree.find(15));
console.log(tree.find(10));

console.log("\n\n--------------BREADTH SEARCH FIRST - Traversal--------------");
console.log("BFT With Arrays:", tree.BFT());
console.log("BFT With Queues: ", tree.BFTWithQueue());
