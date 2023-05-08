console.log("\n\n---------------INSERTION SORT ASC-------------");
let insArr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] < arr[0]) {
      // move number to the first position
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // find position to insert the number
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          // move number to the right spot
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
}

insertionSort(insArr);

console.log(insArr);
