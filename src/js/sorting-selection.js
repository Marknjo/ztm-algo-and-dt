console.log("\n\n---------------SELECTION SORT ASC-------------");
let selectionArr = [6, 5, 3, 1, 8, 7, 2, 4];

function selectionSort(arr) {
  // debugger;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    arr[i] = arr[min];
    arr[min] = temp;
  }
}

selectionSort(selectionArr);
console.log(selectionArr);
