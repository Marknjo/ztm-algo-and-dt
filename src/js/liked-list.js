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

  append(value) {
    // Handle list was initialize without default values
    if (this.length === 0) {
      this.head = {
        value,
        next: null,
      };

      this.tail = this.head;
    }

    /// List was initializes with default values
    if (this.length !== 0) {
      const newNode = {
        value,
        next: null,
      };

      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new List(12);

list.append(10);
list.append(2);

console.log(list);
