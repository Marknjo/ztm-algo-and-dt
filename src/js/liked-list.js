class Node {}

class List {
  constructor(value) {
    this.head = {
      value: value || null,
      next: null,
    };

    this.tail = this.head;
    this.length = value ? 1 : 0;
  }
}

const list = new List();

console.log(list);
