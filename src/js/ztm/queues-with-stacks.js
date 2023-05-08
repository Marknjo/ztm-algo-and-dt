class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  #first = null; // bottom
  #last = null; // top
  length = 0;

  peek() {
    return this.#first.value;
  }

  // push
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.#first = newNode;
      this.#last = newNode;
      this.length++;
      return this.#values();
    }

    this.#last.next = newNode;
    this.#last = newNode;
    this.length++;

    return this.#values();
  }

  // pop
  dequeue() {
    if (this.length === 0) {
      return null;
    }

    if (this.#first === this.#last) {
      this.#last = null;
      this.length--;
      return this.#values();
    }

    let holdCurrentFirst = this.#first;
    this.#first = this.#first.next;
    this.length--;

    return holdCurrentFirst.value;
  }

  #values() {
    let firstNode = this.#first;
    let valuesInQueue = [];
    while (firstNode.next) {
      valuesInQueue.push(firstNode.value);
      firstNode = firstNode.next;
    }

    this.#last?.value && valuesInQueue.push(this.#last.value);

    return valuesInQueue;
  }
}
let queue = new Queue();

/// Enqueue tests
console.log("\n----------------------ENQUEUE----------------------\n");
console.log(queue.enqueue("Charlie"));
queue.enqueue("Ella");
queue.enqueue("Rachel");
queue.enqueue("Ethan");
queue.enqueue("Avery");
queue.enqueue("Max");
queue.enqueue("Olivia");
queue.enqueue("Kaia");
queue.enqueue("Samantha");
console.log(queue.enqueue("Oscar"));
console.log(queue);
console.log(queue.peek());

/// Dequeue tests
console.log("\n----------------------DEQUEUE----------------------\n");
// queue.dequeue();
// console.log(queue.peek());

// queue.dequeue();
// console.log(queue.peek());

// console.log(queue);

/* 
232. Implement Queue using Stacks
Easy
5.7K
336
Companies
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.



*/

class MyQueue {
  #stack = [];

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    return this.#stack.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    // reverse
    this.#flipStack();

    let popped = this.#stack.pop();

    // Reset stack
    this.#flipStack();
    return popped;
  }

  /**
   * @return {number}
   */
  peek() {
    return this.#stack[0];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return !(this.#stack.length > 0);
  }

  #flipStack() {
    if (this.#stack.length > 0) {
      this.#stack.reverse();
    }
  }

  #flipSlow() {
    if (this.#stack.length > 0) {
      this.#reverse(this.#stack);
    }
  }

  #reverse(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
  }
}
console.log("\n----------------------USING ARRAYS----------------------\n");
const myQueue = new Queue();
myQueue.enqueue("Ella");
myQueue.enqueue("Rachel");
myQueue.enqueue("Ethan");
myQueue.enqueue("Avery");
myQueue.enqueue("Max");
myQueue.enqueue("Olivia");
myQueue.enqueue("Kaia");
myQueue.enqueue("Samantha");
console.log(myQueue.enqueue("Oscar"));
console.log(myQueue);
console.log(myQueue.peek());
