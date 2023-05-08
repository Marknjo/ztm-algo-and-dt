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
}

let tree = new BST();

console.log("--------------INSERT METHOD--------------");
//      10
//   5      13
// 2   7 11  16
console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(7));
// console.log(tree.insert(13));
// console.log(tree.insert(2));
// console.log(tree.insert(11));
// console.log(tree.insert(16));

console.log("--------------SEARCH METHOD--------------");

console.log(tree.contains(7));
console.log(tree.find(5));
console.log(tree.find(15));
console.log(tree.find(10));
