/**
 * Does not know how to update the indexes
 * @param {*} collection
 * @param {*} searchValue
 * @returns
 */

function binarySearchV1(collection, searchValue) {
  function search(coll) {
    let middle = Math.floor(coll.length / 2);

    if (middle === 1) {
      console.log(collection);

      return coll.indexOf(searchValue);
    }

    if (coll[middle] === searchValue) {
      return middle;
    }

    if (coll[middle] > searchValue) {
      let collCopy = coll.slice(0, middle);
      return search(collCopy);
    }

    if (coll[middle] < searchValue) {
      let collCopy = coll.slice(middle, coll.length - 1);
      return search(collCopy);
    }
  }

  return search(collection);
}

const collection1 = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12];

const results1 = binarySearchV1(collection1, 10);

console.log(results1);

// Updates the indexes

function binarySearchV2(coll, searchValue) {
  let start = 0;
  let end = coll.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (coll[middle] !== searchValue && start <= middle) {
    if (coll[middle] > searchValue) end = middle - 1;
    if (coll[middle] < searchValue) start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return coll[middle] === searchValue ? middle : -1;
}

const results2 = binarySearchV2(collection1, 3);

console.log({ results2 });
