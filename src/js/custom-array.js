class CustomArray {
  #data = {};
  length = 0;

  get(index) {
    return this.#data[index];
  }

  push(value) {
    try {
      // stop unsupported input types
      this.#isUnsupported(value);

      this.#data[this.length] = value;

      this.length++;

      return this.length;
    } catch (error) {
      this.error(error.message);
    }
  }

  pop() {
    const lastItem = this.#data[this.length - 1];
    delete this.#data[this.length - 1];
    this.length--;

    return lastItem;
  }

  unShift(values) {
    try {
      /// Stop unsupported input types
      this.#isUnsupported(values);

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
    } catch (error) {
      console.error(error.message);
    }
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

  #isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }

  /**
   * Stop unsupported input types
   * @param {any} value
   */
  #isUnsupported(value) {
    try {
      if (
        value === null ||
        value === undefined ||
        `${value}`.trim() === "" ||
        this.#isObject(value)
      ) {
        throw new Error(
          `TypeError: ${JSON.stringify(value)} is unsupported input type`
        );
      }
    } catch (error) {
      throw error;
    }
  }
}

const array = new CustomArray();

// array.push(null);
array.push("my");
array.push("name");
array.push("is");
array.push("James");

// array.pop();

// array.unShift(null);

// array.shift();
// array.shift();

console.log(array);
console.log(array.length);
