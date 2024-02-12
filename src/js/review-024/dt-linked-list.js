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

  get(index) {
    if (index >= this.length || index < 0 || !isFinite(index)) return false;

    if (index === 0) return this.#head.value;
    if (index === this.length - 1) return this.#tail.value;

    let nextNode = this.#head;
    let currentIndex = 1;

    while (Boolean(nextNode.next)) {
      if (index === currentIndex) {
        return nextNode.next.value;
      }
      currentIndex++;
      nextNode = nextNode.next;
    }
  }

  #validate(value) {
    if (`${value}`.trim() !== '' || value !== undefined || value !== null)
      return false;
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
const res6 = linkedList.push(6);

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
const unS1 = linkedList.unshift(0);
const unS2 = linkedList.unshift(-1);

console.log(unS1);
console.log(unS2);

// Pop
console.log('---pop---');

const popS1 = linkedList.pop(); // expect length = 7
console.log({ popS1 }, linkedList.all());
