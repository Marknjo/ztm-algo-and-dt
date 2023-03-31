/// Implement Index of algorithm

function indexOf(value, collection) {
  for (let i = 0; i < collection.length; i++) {
    if (value === collection[i]) return i;
  }

  return -1;
}

let collection1 = [1, 2, 3, 4, 5, 6, 7];

const results1 = indexOf(4, collection1);

console.log({ results1 });
