/* 
  Write a function called sumZero which accepts a sorted
  array of integers. The function should find the first pair
  where the sum is 0. Return an array that includes both
  values that sum to zero or undefined if a pair does not exist

  Examples:
  sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
  sumzero([-2,0,1,3]) // undefined
  sumzero([1,2,3]) // undefined

  -> Two pointers one moving from the start and another moving from the end
  -> Inputs are arrays
  -> outputs either undefined or a array of first seen values that sum to 0;
  -> labeling inputValues, sumZero(), rightCursor, leftCursor


  Prob 2: 
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 

  Examples: 
    countUniqueValues([1,1,1,1,1,2]) // 2 
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7 
    countUniqueValues([]) // 0 
    countUniqueValues([-2,-1,-1,0,1]) // 4 
  
*/

const data1Input1 = [-3, -2, -1, 0, 1, 2, 3];
const data1Input2 = [-2, 0, 1, 3];
const data1Input3 = [1, 2, 3];
const data1Input4 = [-4, -3, -2, -1, 0, 1, 2, 3, 10];

const data2Input1 = [1, 1, 1, 1, 1, 2];
const data2Input2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const data2Input3 = [];
const data2Input4 = [-2, -1, -1, 0, 1];

function sumZeroV1(inputValues) {
  // initialize cursors
  let leftCursor = 0;
  let rightCursor = inputValues.length - 1;

  // loop through the inputValues when rightCursor >= leftCursor
  while (leftCursor < rightCursor) {
    // - Check if sum inputValue[rightCursor] + inputValue[leftCursor]
    let sum = inputValues[leftCursor] + inputValues[rightCursor];
    if (sum === 0) {
      return [inputValues[leftCursor], inputValues[rightCursor]];
    } else if (sum > 0) {
      console.log(sum);

      // - Check if sum is 0, return [inputRight, inputLeft]
      rightCursor--;
    } else {
      console.log({ sum });
      // - If not, increase increase left cursor and decrement right cursor
      leftCursor++;
    }
  }
}

// const results1V1 = sumZeroV1(data1Input1);
// const results2V1 = sumZeroV1(data1Input2);
// const results3V1 = sumZeroV1(data1Input3);
// const results4V1 = sumZeroV1(data1Input4);

// console.table({ results1V1 });
// console.table({ results2V1 });
// console.table({ results3V1 });
// console.table({ results4V1 });

function countUniqueValuesV1(arr) {
  if (!Array.isArray(arr)) return undefined;

  if (arr.length === 0) {
    return 0;
  }
  const newArr = [...arr];
  let counterCursor = 0;
  let movingCursor = 1;

  while (movingCursor < newArr.length) {
    let currentValue = newArr[counterCursor];
    let nextValue = newArr[movingCursor];

    if (currentValue !== nextValue) {
      counterCursor++;
      newArr[counterCursor] = nextValue;
      movingCursor++;
    } else {
      movingCursor++;
    }
  }

  return ++counterCursor;
}

const results1V2 = countUniqueValuesV1(data2Input1);
const results2V2 = countUniqueValuesV1(data2Input2);
const results3V2 = countUniqueValuesV1(data2Input3);
const results4V2 = countUniqueValuesV1(data2Input4);
const results5V2 = countUniqueValuesV1();
console.table({ results1V2, results2V2, results3V2, results4V2, results5V2 });

function countUniqueValuesV2(arr) {
  if (!Array.isArray(arr)) return undefined;

  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return ++i;
}

const results1V3 = countUniqueValuesV2(data2Input1);
const results2V3 = countUniqueValuesV2(data2Input2);
const results3V3 = countUniqueValuesV2(data2Input3);
const results4V3 = countUniqueValuesV2(data2Input4);
const results5V3 = countUniqueValuesV2();
console.table({ results1V3, results2V3, results3V3, results4V3, results5V3 });
