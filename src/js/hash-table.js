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

  printData() {
    return this.#data;
  }
}

const hashTable = new HashTable(2);

hashTable.set("grapes", 10000);
hashTable.set("grapes", 10000);

console.log(hashTable.printData());
