// NODE BASE
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const firstNode = new Node("i");
// firstNode.next = new Node("love");
// firstNode.next.next = new Node("JavaScript");
// firstNode.next.next.next = new Node("It");
// firstNode.next.next.next.next = new Node("is");
// firstNode.next.next.next.next.next = new Node("Awesome");

// console.log(firstNode);

class SinglyList {
  length = 0;
  #head = null;
  #tail = null;

  push(val) {
    let newNode = new Node(val);
    this.length++;

    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;

      return this;
    }

    this.#tail.next = newNode;
    this.#tail = newNode;
    return this;
  }

  pop() {
    if (!this.#head) return undefined;

    // let currentTail = this.#tail;
    // if (this.length === 1) {
    //   this.#head = null;
    //   this.#tail = null;
    //   this.length--;
    //   return currentTail;
    // }

    // let currentHead = this.#head;

    // while (currentHead.next) {
    //   if (!currentHead.next.next) {
    //     currentHead.next = null;
    //     this.#tail = currentHead;
    //     this.length--;
    //     return currentTail;
    //   }

    //   currentHead = currentHead.next;
    // }

    let current = this.#head;
    let nextTail = current.next;

    while (current.next) {
      nextTail = current;
      current = current.next;
    }

    this.#tail = nextTail;
    this.#tail?.next && (this.#tail.next = null);
    this.length--;

    if (this.length === 0) {
      this.#head = null;
      this.#tail = null;
    }

    return current;
  }

  unshift(val) {
    /// no node in the list
    if (!this.#head) return this.push(val);

    /// there is node in he list
    const newNode = new Node(val);

    let currentHead = this.#head;
    newNode.next = currentHead;
    this.#head = newNode;
    this.length++;

    return this;
  }

  shift() {
    /// where there is no head
    if (!this.#head) return undefined;

    /// where there is head
    let currentHead = this.#head;
    this.#head = this.#head.next;
    this.length--;

    /// last item on 0 is null - set tail to null
    !this.length && (this.#tail = null);

    /// return removed node
    return currentHead;
  }

  get(index) {
    // invalid indexes
    if (!Number.isFinite(index)) return undefined;

    // index is more than length or less than 0
    if (index > this.length || index < 0) return null;

    // index is the first value
    if (index === 0) return this.#head;

    // index is equal to the length of the list
    if (index === this.length) return this.#tail;

    /// search index
    let current = this.#head;

    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  set(value, index) {
    let foundNode = this.get(index);
    if (!foundNode) return false;

    foundNode.val = value;
    return this;
  }

  insert(value, index) {
    // invalid index & value is not a number
    if (!Number.isFinite(index) || value === "" || index === "") return false;
    // index is less than 0, or is greater than 1
    if (index < 0 || index > this.length) return false;
    // index is equal to the length
    if (index === this.length) return !!this.push(value);
    // index is zero
    if (index === 0) return !!this.unshift(value);

    // index is greater than 0 && less than len
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    let newNode = new Node(value);
    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    // invalid index & value is not a number
    if (!Number.isFinite(index) || index === "") return false;

    // index is less than 0, or is greater than 1
    if (index < 0 || index > this.length) return false;

    // index is equal to the length
    if (index === this.length) return this.pop();

    // index is zero
    if (index === 0) return this.shift();

    // index > 0 && index < len
    let nodeBeforeIndex = this.get(index - 1);
    let removedNode = nodeBeforeIndex.next;
    let nodeAfterIndex = nodeBeforeIndex.next.next;
    nodeBeforeIndex.next = nodeAfterIndex;
    this.length--;

    return removedNode;
  }

  reverse() {
    let head = this.#head;
    let tail = head;

    let nextNode = head.next;
    let prev = null;

    while (nextNode) {
      head.next = prev;
      prev = head;
      head = nextNode;
      nextNode = nextNode.next;
    }

    head.next = prev;
    this.#tail = tail;
    this.#head = head;

    return this;
  }

  printList() {
    let list = new Set();

    let currentNode = this.#head;

    while (currentNode.next) {
      list.add(currentNode.val);

      currentNode = currentNode.next;
    }

    list.add(this.#tail.val);

    return [...list];
  }
}

let list = new SinglyList();

list.push("I");
list.push("Love");
list.push("JavaScript");
list.push("And");

// list.pop();
// list.pop();
// list.pop();
// console.log(list.pop());
// console.log(list.pop());

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());

console.log("\n\n JavaScript Love I");

console.log(list.unshift("I"));
console.log(list.unshift("Love"));
console.log(list.unshift("JavaScript"));

console.log("\n\n Get Method");

console.log(list.get(0));
console.log(list.get(-1));

console.log("\n\n Set Method");

console.log(list.set("💘", 1));

console.log("\n\n Insert Method");

console.log("Invalid value: ", list.insert("", 1));
console.log("Invalid Index negative: ", list.insert("Happy", -1));
console.log("Invalid Index > length: ", list.insert("Happy", 1000));
console.log("Invalid Index > empty: ", list.insert());

console.log("Inset 'Love' before emoji: ", list.insert("love", 1));
console.log("Inset at the end: ", list.insert("well", 4));
console.log("Inset at the start: ", list.insert("cool", 0));
console.log(list);

console.log("\n\n Remove Method");

console.log("Remove Love: ", list.remove(2));
console.log("Remove Well: ", list.remove(5));
console.log("Remove cool: ", list.remove(0));
console.log(list);

console.log("\n\n Reverse Method");

list.insert("love", 1);
list.insert("well", 4);
list.insert("cool", 0);
console.log(list.printList());
list.reverse();
console.log(list.printList());
