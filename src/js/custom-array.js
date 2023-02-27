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
}

const array = new CustomArray();

array.push("my");
array.push("name");
array.push("is");
array.push("James");

array.pop();

array.unShift("Hi");

console.log(array);
console.log(array.length);
