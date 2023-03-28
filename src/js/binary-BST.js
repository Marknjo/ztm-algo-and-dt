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
}

let tree = new BST();

console.log("--------------INSERT METHOD--------------");
//      10
//   5      13
// 2   7 11  16
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(7));
console.log(tree.insert(13));
console.log(tree.insert(2));
console.log(tree.insert(11));
console.log(tree.insert(16));
