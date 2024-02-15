class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  length = 0;
  #head = null;
  #tail = null;

  all() {
    return this;
  }

  push(value) {
    if (this.#validate(value)) return false;

    const newNode = new Node(value);

    if (!this.#head) {
      this.#head = newNode;
      this.#tail = this.#head;
    } else {
      // const temp = this.#tail;
      // this.#tail = newNode;
      // temp.next = this.#tail;

      // Alternative - short
      this.#tail.next = newNode;
      this.#tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return false;
    if (this.length === 1) {
      this.#head = null;
      this.#tail = null;
      return this;
    }

    let currentNode = this.#head;
    let prevNode = currentNode;

    while (Boolean(currentNode.next)) {
      prevNode = currentNode;

      currentNode = currentNode.next;
    }

    prevNode.next = null;
    const deletedNode = currentNode;
    this.#tail = prevNode;

    this.length -= 1;

    return deletedNode;
  }

  unshift(value) {
    if (this.#validate(value)) return false;

    const newNode = new Node(value);
    const head = this.#head;
    this.#head = newNode;
    this.#head.next = head;

    this.length += 1;

    return this;
  }

  shift() {
    if (this.length === 0) return false;
    const currentHead = this.#head;
    const nextNode = currentHead.next;
    this.#head = nextNode;
    currentHead.next = null;

    this.length -= 1;
    return currentHead;
  }

  insertByIndex(value, index) {
    // zero indexed
    if (
      this.#validate(value) ||
      this.#validate(index) ||
      index >= this.length ||
      (this.length === 0 && index > 0) ||
      index < 0
    )
      return undefined;

    if (index === 0) return this.unshift(value);

    if (index === this.length - 1) return this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    newNode.next = nextNode;
    prevNode.next = newNode;

    this.length++;
    return this;
  }

  insertByValue(value, toBeReplaced) {
    const foundNextNode = this.find(toBeReplaced);

    // zero indexed
    if (
      this.#validate(value) ||
      this.#validate(toBeReplaced) ||
      foundNextNode === -1
    )
      return -1;

    if (foundNextNode.index === 0) return this.unshift(value);

    if (foundNextNode.index === this.length - 1) return this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(foundNextNode.index - 1);

    const nextNode = foundNextNode;

    newNode.next = nextNode;
    prevNode.next = newNode;

    this.length++;
    return this;
  }

  get(index, asValue) {
    if (index >= this.length || index < 0 || !isFinite(index)) return -1;

    if (index === 0) return asValue ? this.#head.value : this.#head;
    if (index === this.length - 1)
      return asValue ? this.#tail.value : this.#tail;

    let nextNode = this.#head;
    let currentIndex = 1;

    while (Boolean(nextNode.next)) {
      if (index === currentIndex) {
        return asValue ? nextNode.next.value : nextNode.next;
      }
      currentIndex++;
      nextNode = nextNode.next;
    }
  }

  find(value) {
    if (this.#validate(value)) return -1;

    if (this.length === 1) {
      return this.#head.value === value ? this.#head : -1;
    }

    let currentNode = this.#head;
    let index = 0;

    while (Boolean(currentNode.next)) {
      if (currentNode.value === value) {
        return {
          index,
          ...currentNode,
        };
      }
      index++;
      currentNode = currentNode.next;
    }

    return -1;
  }

  print() {
    if (this.length === 0) return [];
    if (this.length === 1) [this.#head.value];

    const values = [];
    let nextNode = this.#head;

    while (Boolean(nextNode.next)) {
      values.push(nextNode.value);

      nextNode = nextNode.next;
    }

    values.push(this.#tail.value);

    return values;
  }

  reverse() {
    let node = this.#head;
    this.#head = this.#tail;
    this.#tail = node;
    let nextNode;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }

    return this;
  }

  #validate(value) {
    if (`${value}`.trim() !== '' || value !== undefined || value !== null)
      return false;

    return true;
  }
}

const linkedList = new LinkedList();
console.log('---push()---');
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
const res6 = linkedList.push(6);
console.log(res6);

console.log('\n---get() by id---');
console.log(res6);
const getRes = linkedList.get(-1); // expects false
console.log(getRes);
const getRes1 = linkedList.get('av'); // expects false
console.log(getRes1);

const getRes2 = linkedList.get(2); // expects 3
const getRes3 = linkedList.get(5); // expects 6
const getRes4 = linkedList.get(1); // expects 2

console.log({ getRes2, getRes3, getRes4 });

// Unshift
console.log('\n---unshift()---');
const unS1 = linkedList.unshift(0);
const unS2 = linkedList.unshift(-1);

console.log(unS1);
console.log(unS2);

// Pop
console.log('\n---pop()---');

const popS1 = linkedList.pop(); // expect length = 7
console.log({ popS1 }, linkedList.all());

// Delete head node
console.log('\n---shift()---');
const deletedNode = linkedList.shift();

console.log(deletedNode);
console.log(linkedList.all());

// All values
console.log('\n---values()---');
const values = linkedList.print();
console.log(values);

// Find Value
console.log('\n---find()---');
const foundValue1 = linkedList.find(2); // expects node {value: 2, next: null}
console.log(foundValue1);

// const foundValue2 = linkedList.find(6); // expects node -1
// console.log(foundValue2);

console.log('\n---reverse()---');
console.log('Before reverse 🚩: ', linkedList.print());
linkedList.reverse();
console.log('Reversed ⛳: ', linkedList.print());

console.log('\n---insertByIndex()---');
console.log(linkedList.insertByIndex(12, -1)); // undefined

linkedList.insertByIndex(10, 3); // insert 10 between 3 & 2 -> 3,10,2
console.log(linkedList.print());

console.log('\n---insertByValue()---');
linkedList.insertByValue(20, 4); // insert 10 between 5 & 4 -> 5,20,4
console.log(linkedList.print());
console.log(linkedList.insertByValue(20, -2)); // undefined
