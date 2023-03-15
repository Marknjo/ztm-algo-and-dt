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

  lookup(value) {
    if (!this.#root) {
      return null;
    }

    let currentNode = this.#root;

    while (currentNode) {
      /// Exit if we have a match
      if (currentNode.value === value) {
        return currentNode;
      }

      // Keep looking till a match is found
      // Look to the left
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }

      // Look to the right
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
  }

  remove(value) {
    if (!this.#root) {
      return null;
    }

    let currentNode = this.#root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // Option 1: No Right Child;
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.#root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          /// Option 2: Right child doe not have a child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.#root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          /// Option 3: Right child that has a left child
        } else {
          // find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftMostParent = currentNode.right;

          while (leftmost.left !== null) {
            leftMostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Parent's left subtree is not leftmost's right subtree;
          leftMostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }

        return true;
      }
    }
  }

  traverse() {
    if (!this.#root) return null;

    const tree = { value: this.#root.value };
    tree.left =
      this.#root.left === null ? null : this.traverse(this.#root.left);
    tree.right =
      this.#root.right === null ? null : this.traverse(this.#root.right);

    return tree;
  }

  DFSInOrder() {
    return traverseInOrder(this.#root, []);
  }

  DFSPreOrder() {
    return traversePreOrder(this.#root, []);
  }

  DFSPostOrder() {
    return traversePostOrder(this.#root, []);
  }
}

const tree = new BinarySearchTree();

// Sample Tree
//         9
//    4        20
// 1    6  15      170
// IN-ORDER: 1 -> 4 -> 6 -> 9 -> 15 -> 20 -> 170
// PRE-ORDER: 9 -> 4 -> 1 -> 6 -> 15 -> 20 -> 170
// POST-ORDER: 1 -> 6 -> 4 -> 15 -> 170 -> 20 -> 9

tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(170);
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

console.table(previewTree);

/// Lookup Test
console.log("\n\n-------------------------LOOKUP-------------------------\n");
console.table(tree.lookup(15));

/// DEPTH First Search

function traverseInOrder(node, list) {
  // work through
  if (node.left) traverseInOrder(node.left, list);

  list.push(node.value);

  if (node.right) traverseInOrder(node.right, list);

  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);

  if (node.left) traversePreOrder(node.left, list);

  if (node.right) traversePreOrder(node.right, list);

  return list;
}

function traversePostOrder(node, list) {
  if (node.left) traversePostOrder(node.left, list);

  if (node.right) traversePostOrder(node.right, list);

  list.push(node.value);
  return list;
}

console.log("\n\n-------------------------DFS ALGO------------------------\n");

console.log("In-Order: ", tree.DFSInOrder());
console.log("Pre-Order: ", tree.DFSPreOrder());
console.log("Post-Order: ", tree.DFSPostOrder());
