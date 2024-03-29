class HashTable {
  #data;

  constructor(size) {
    this.#data = new Array(size);
  }

  #hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.#data.length;
    }

    return hash;
  }

  set(key, value) {
    console.time("Set");
    let address = this.#hash(key);

    if (!this.#data[address]) {
      this.#data[address] = [];
    }
    this.#data[address].push([key, value]);
    console.timeEnd("Set");
  }

  get(key) {
    let address = this.#hash(key);

    if (!this.#data[address]) {
      return undefined;
    }

    /// Don't repeat asking for address value(s)
    let foundAddress = this.#data[address];

    /// If no-collision, and there is only one value in the same options
    if (foundAddress.length === 1) {
      return foundAddress[0][1];
    }

    /// Multiple values in the same option
    let foundValues = foundAddress.map((value) => {
      if (value[0] === key) {
        return value[1];
      }
    });

    return foundValues.length > 1 ? foundValues : foundValues[0];
  }

  keys() {
    // Perfect condition - no collision
    return this.#getKeysOrValues(0);
  }

  delete(key) {
    const foundData = this.get(key);

    if (!foundData) {
      return undefined;
    }

    const address = this.#hash(key);
    const deletedData = this.#data[address];

    delete this.#data[address];

    return deletedData;
  }

  values() {
    return this.#getKeysOrValues(1);
  }

  printData() {
    return this.#data;
  }

  #getKeysOrValues(position) {
    return [
      ...new Set(
        this.#data.map((data) => {
          if (data.length > 1) {
            return data.map((subData) => subData[position]);
          }
          return data[0][position];
        })
      ),
    ].splice(1);
  }
}

const hashTable = new HashTable(50);

hashTable.set("grapes", 10000);
hashTable.set("oranges", 70);
hashTable.set("dates", 190);
hashTable.set("grapes", 50);
hashTable.set("pineapples", 104);

// console.log(hashTable.get("pineapples"));

// console.log(hashTable.keys());
// console.log(hashTable.values());

// console.log(hashTable.get("pineapples"));

console.log(hashTable.delete("grapes"));

console.log(hashTable.printData());
