console.log("Coding challenge 5th May 2023");

/* 

Buggy Code (Part 7)
Mubashir wants to swap two given numbers!

It is not returning the right values. Can you help him fix it?

  a = 100
  b = 200
  a, b = swap(a, b)
  print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
Examples
  swap(100, 200) ➞ [200, 100]

  swap(44, 33) ➞ [33, 44]

  swap(21, 12) ➞ [12, 21]
Notes
  N/A

*/

// Problem
function swapProb(a, b) {
  b = a;
  a = b;
  return [a, b];
}

// Solution
const test1Value1 = 100,
  test1Value2 = 200,
  test2Value1 = 33,
  test2Value2 = 44,
  test3Value1 = 12,
  test3Value2 = 21;

function swapSolution(a, b) {
  const isANumber = Number.isFinite(a),
    isBNumber = Number.isFinite(b);
  if (!isANumber || !isBNumber)
    throw new Error("Provided Params MUST be numbers");

  let c = b;
  b = a;
  return [c, b];
}

console.log(`\n\n-------------------Swap Solution------------------`);

const test1Swap = swapSolution(test1Value1, test1Value2);
const test2Swap = swapSolution(test2Value1, test2Value2);
const test3Swap = swapSolution(test3Value1, test3Value2);

console.table({ test1Swap, test2Swap, test3Swap });

/**
Check if One Array can be Nested in Another
Create a function that returns true if the first array can be nested inside the second and false otherwise.

  arr1 can be nested inside arr2 if:

  arr1's min is greater than arr2's min.
  arr1's max is less than arr2's max.

Examples
  canNest([1, 2, 3, 4], [0, 6]) ➞ true

  canNest([3, 1], [4, 0]) ➞ true

  canNest([9, 9, 8], [8, 9]) ➞ false

  canNest([1, 2, 3, 4], [2, 3]) ➞ false
Notes
  Note the strict inequality (see example #3).
 */

console.log(`\n\n-------------------CanNest Solution------------------`);
function canNest(arr1, arr2) {
  /// min
  const arr1Min = Math.min(...arr1);
  const arr2Min = Math.min(...arr2);

  const isArr1MinGTArr2 = arr1Min > arr2Min;

  /// Max
  const arr1Max = Math.max(...arr1);
  const arr2Max = Math.max(...arr2);

  const isArr1MaxLTArr2 = arr1Max < arr2Max;

  return isArr1MaxLTArr2 && isArr1MinGTArr2 ? true : false;
}

const canNestTest1Arr1 = [1, 2, 3, 4],
  canNestTest1Arr2 = [0, 6],
  canNestTest2Arr1 = [3, 1],
  canNestTest2Arr2 = [4, 0],
  canNestTest3Arr1 = [9, 9, 8],
  canNestTest3Arr2 = [8, 9],
  canNestTest4Arr1 = [1, 2, 3, 4],
  canNestTest4Arr2 = [2, 3];

console.table({
  canNestSl1: canNest(canNestTest1Arr1, canNestTest1Arr2),
  canNestSl2: canNest(canNestTest2Arr1, canNestTest2Arr2),
  canNestSl3: canNest(canNestTest3Arr1, canNestTest3Arr2),
  canNestSl4: canNest(canNestTest4Arr1, canNestTest4Arr2),
});

console.log(`\n\n-------------------Circuit Power Solution------------------`);
/**
  Power Calculator
  Create a function that takes voltage and current and returns the calculated power.

  Examples
    circuitPower(230, 10) ➞ 2300

    circuitPower(110, 3) ➞ 330

    circuitPower(480, 20) ➞ 9600
  Notes
    Requires basic calculation of electrical circuits (see Resources for info).
 */

function circuitPower(voltage, power) {
  return voltage * power;
}

const cpTest1Voltage = 230,
  cpTest1Current = 10,
  cpTest2Voltage = 110,
  cpTest2Current = 3,
  cpTest3Voltage = 480,
  cpTest3Current = 20;

console.log(`\n\n-------------------CanNest Solution------------------`);
console.table({
  ctSln1: circuitPower(cpTest1Voltage, cpTest1Current),
  ctSln2: circuitPower(cpTest2Voltage, cpTest2Current),
  ctSln3: circuitPower(cpTest3Voltage, cpTest3Current),
});
