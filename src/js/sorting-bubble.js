console.log("\n\n---------------BUBBLE SORT ASC-------------");
let arrBubble = [6, 5, 3, 1, 8, 7, 2, 4];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tempJ = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempJ;
      }
    }
  }
}

bubbleSort(arrBubble);

console.log(arrBubble);
