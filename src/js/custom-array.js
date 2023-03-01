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

      let args = [...arguments];

      if (Array.isArray(input)) args = input;

      const argsLen = args.length;

      if (argsLen > 1) {
        args.forEach((arg) => {
          this.#data[this.length] = arg;
          this.length++;
        });

        return this.length;
      }

      /// Pop receives only one argument
      this.#data[this.length] = input;

      this.length++;

      return this.length;

      //return this.#multipleInputs(input);
    } catch (error) {
      console.error(error.message);
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

  remove(index) {
    if (!this.#data[index]) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    /// Index is n (between 0 and max n)
    delete this.#data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.#data[i] = this.#data[i + 1];
    }

    delete this.#data[this.length - 1];
    this.length--;
  }

  reverse() {
    const tempData = {};

    for (let i = this.length - 1; i >= 0; i--) {
      tempData[this.length - (i + 1)] = this.#data[i];
    }
    this.#data = tempData;

    return this.length;
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

  printData() {
    return Object.values(this.#data);
  }
}

const array = new CustomArray();

// array.push(null);
array.push("my");
array.push("name");
array.push("is");
array.push("James");

array.push(["I", "come", "from", "Arizona", ",", "United States"]);

// array.pop();

// array.unShift("I", "come", "from", "Arizona", ",", "United States");

// array.shift();
// array.shift();

// array.remove(1);
array.reverse();

console.log(array);
console.log(array.printData());
