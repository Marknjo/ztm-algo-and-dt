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

  printData() {
    return this.#data;
  }
}

const hashTable = new HashTable(50);

hashTable.set("grapes", 10000);
hashTable.set("grapes", 50);
hashTable.set("pineapples", 104);

console.log(hashTable.get("pineapples"));

console.log(hashTable.printData());
