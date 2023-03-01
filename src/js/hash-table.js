class HashTable {
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
}

const hashTable = new HashTable(50);

hashTable.set("grapes", 10000);
