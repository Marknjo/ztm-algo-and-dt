let arr1 = [6, 5, 3, 1, 8, 7, 2, 4];
let arr2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log("\n\n---------------MERGE SORT ASC-------------");

function mergeSort(arr) {
  if (arr.length <= 1) {
    // Use less strict comparison and checking for values less than or equal to 1
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  // Recursively split array into left and right halves and merge them using merge() helper function
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

const answer1 = mergeSort(arr1);
const answer2 = mergeSort(arr2);

console.log("\n");
console.log(answer1);
console.log(answer2);
