class CustomArray {
  #data = {};
  length = 0;

  get(index) {
    return this.#data[index];
  }

  push(value) {
    this.#data[this.length] = value;

    this.length++;

    return this.length;
  }

  pop() {
    const lastItem = this.#data[this.length - 1];
    delete this.#data[this.length - 1];
    this.length--;

    return lastItem;
  }

  unShift(values) {
    if (this.length === 0) {
      this.push(values);
    }

    let args = [...arguments];

    if (typeof values !== "string" && Array.isArray(values)) {
      args = values;
    }

    const argsLen = args.length;

    let tempDataHolder = {};
    for (let key = 0; key < this.length; key++) {
      tempDataHolder[+key + argsLen] = this.#data[key];
    }

    if (argsLen > 1) {
      args.forEach((value, key) => {
        this.#data[key] = value;
        this.length++;
      });

      this.#data = { ...this.#data, ...tempDataHolder };
      return this.length;
    }

    this.#data[0] = values;
    this.#data = { ...this.#data, ...tempDataHolder };

    this.length++;
    return this.length;
  }

  /**
   * Remove first item from the array
   */
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let firstItem = this.#data[0];

    /// Only one item
    if (this.length === 1) {
      delete this.#data[0];
      this.length = 0;
      return firstItem;
    }

    /// More than one item
    delete this.#data[0];
    const tempDataHolder = {};

    for (let item = 1; item < this.length; item++) {
      tempDataHolder[item - 1] = this.#data[item];
    }

    this.#data = { ...tempDataHolder };
    this.length--;

    return firstItem;
  }
}

const array = new CustomArray();

array.push("my");
array.push("name");
array.push("is");
array.push("James");

array.pop();

array.unShift("Hi");

array.shift();
array.shift();

console.log(array);
console.log(array.length);
