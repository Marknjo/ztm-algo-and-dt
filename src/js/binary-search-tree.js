class Node {
  left = null;
  right = null;
  value;

  constructor(value) {
    this.value = value;
  }
}

class BinarySearchTree {
  #root = null;

  insert(value) {}

  lookup(value) {}

  remove(value) {}

  traverse() {
    if (!this.#root) return null;

    const tree = { value: this.#root.value };
    tree.left = node.left === null ? null : this.traverse(this.#root.left);
    tree.right = node.right === null ? null : this.traverse(this.#root.right);

    return tree;
  }
}

const tree = new BinarySearchTree();

// Sample Tree
//         9
//    4        20
// 1    6  15      170

/// Test Data
const previewTree = tree.traverse();

console.table(previewTree);
console.log(previewTree);
