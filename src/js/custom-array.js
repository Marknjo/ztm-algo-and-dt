class CustomArray {
  #data = {};
  length = 0;

  get(index) {
    return this.#data[index];
  }

  push(input) {
    try {
      // stop unsupported input types
      this.#isUnsupported(input);

      if (!Array.isArray(input)) {
        this.#data[this.length] = input;

        this.length++;

        return this.length;
      }

      //return this.#multipleInputs(input);
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

  unShift(input) {
    try {
      /// Stop unsupported input types
      this.#isUnsupported(input);

      if (this.length === 0) {
        this.push(input);
      }

      let multipleInputResponse = this.#multiUnshift(
        Array.isArray(input) ? input : [...arguments]
      );

      if (typeof multipleInputResponse === "number") {
        return multipleInputResponse;
      }

      this.#data[0] = input;
      this.#data = { ...this.#data, ...multipleInputResponse };
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

  /**
   * Supports multiple inputs in unshift and push
   * @param {number|string|array} values
   * @returns number
   */
  #multiUnshift(values) {
    const argsLen = values.length;

    let tempDataHolder = {};
    for (let key = 0; key < this.length; key++) {
      tempDataHolder[+key + argsLen] = this.#data[key];
    }

    if (argsLen > 1) {
      values.forEach((value, key) => {
        this.#data[key] = value;
        this.length++;
      });

      this.#data = { ...this.#data, ...tempDataHolder };

      return this.length;
    }

    return tempDataHolder;
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

array.push("I", "come", "from", "Arizona", ",", "United States");

// array.pop();

// array.unShift("I", "come", "from", "Arizona", ",", "United States");

// array.shift();
// array.shift();

console.log(array);
console.log(array.length);
