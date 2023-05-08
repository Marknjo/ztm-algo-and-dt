/**
 * Implementing Stacks with Arrays
 *
 * The above code defines a JavaScript class called Stacks.
 * This class is used to represent a stack data structure.
 * The class contains two private variables #bottom and #top.
 * These variables are initialized to null.
 *
 * When new elements are added to the stack using the push() method,
 * the #top and #bottom variables are updated accordingly.
 * Similarly, when elements are removed from the stack using the pop() method,
 * the variables are updated again.
 *
 * The peek() method returns the value of the top element in the stack without removing it.
 * The length variable is updated automatically whenever elements are added or
 * removed from the stack.
 *
 */
//This is a class named Stacks that has two private properties, `top` and `bottom`
class Stacks {
  #top = null;
  #bottom = null;

  /**
   * This a public array property to store stacks
   */
  #stack = [];

  /**
   * This is a public property of the length of stack array
   */
  length = this.#stack.length;

  /**
   * This function is to get the top element of the stack
   * @returns Stacks
   */
  peek() {
    return this.#top;
  }

  /**
   * this function is to push an element inside the stack array and update values of top, bottom, and length
   * @param {any} value
   * @returns Stacks
   */
  push(value) {
    this.#stack.push(value);

    if (!this.#bottom || !this.#top) {
      //if #bottom or #top is null, assign first element to both
      this.#top = this.#stack[0];
      this.#bottom = this.#stack[0];
    }

    this.#top = this.#stack.at(-1); //assign last element to the current top
    this.length = this.#stack.length; //update length

    return this; //return object of Class Stacks
  }

  /**
   * This function is to remove the last element from stack, and also to update values of top, bottom, and length
   * @returns this class
   */
  pop() {
    this.#stack.pop();

    this.#top = this.#stack.at(-1); //assign new top after popping
    this.length = this.#stack.length; // update length after popping

    return this; //return object of Class Stacks after popping
  }
}

const arrStack = new Stacks();

console.log(arrStack.peek());

arrStack.push("Google");
arrStack.push("Udemy");
arrStack.push("Bytes");
arrStack.push("Syntax");
arrStack.push("TheTalkingDev");

console.log(arrStack.peek());
console.log(arrStack);

arrStack.pop();

console.log(arrStack.peek());

console.log(arrStack);
