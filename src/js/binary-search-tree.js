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

  get parentNode() {
    return this.#root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.#root) {
      this.#root = newNode;
      return this;
    }

    // The root is already initialized
    let currentNode = this.#root;

    while (true) {
      // Handle left
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }

      // Handle right
      if (value >= currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {}

  remove(value) {}

  traverse() {
    if (!this.#root) return null;

    const tree = { value: this.#root.value };
    tree.left =
      this.#root.left === null ? null : this.traverse(this.#root.left);
    tree.right =
      this.#root.right === null ? null : this.traverse(this.#root.right);

    return tree;
  }
}

const tree = new BinarySearchTree();

// Sample Tree
//         9
//    4        20
// 1    6  15      170

tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(117);
tree.insert(15);
tree.insert(6);
tree.insert(1);

/// Test Data
function traverse(node) {
  if (!node) return null;

  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}

// const previewTree = tree.traverse();
const previewTree = traverse(tree.parentNode);

console.log(previewTree);
