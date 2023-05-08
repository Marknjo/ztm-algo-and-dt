/*

66. Plus One

Easy 6.8K 4.8K

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.


Example 1:

  Input: digits = [1,2,3]
  Output: [1,2,4]
  Explanation: The array represents the integer 123.
  Incrementing by one gives 123 + 1 = 124.
  Thus, the result should be [1,2,4].


Example 2:

  Input: digits = [4,3,2,1]
  Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.
  Incrementing by one gives 4321 + 1 = 4322.
  Thus, the result should be [4,3,2,2].


Example 3:

  Input: digits = [9]
  Output: [1,0]
  Explanation: The array represents the integer 9.
  Incrementing by one gives 9 + 1 = 10.
  Thus, the result should be [1,0].
  

Constraints:
  1 <= digits.length <= 100
  0 <= digits[i] <= 9
  digits does not contain any leading 0's.

Accepted         1.6M
Submissions      3.7M
Acceptance Rate 43.6%

 */

/**
 * @param {number[]} digits
 * @return {number[]}
 *
 * Runtime 63 ms - Beats 60.90% | Memory 41.7 MB - Beats 77.36%
 *
 * See improved Time performance after swapping spread with unshift
 * Runtime 53 ms Beats 93.14% |  Memory 42.3 MB Beats 13.18%
 *
 * /// Final tweak has resulted to
 * Runtime 55 ms Beats 90.36% |  Memory 41.7 MB Beats 84.72%
 */
const plusOneV1 = function (digits) {
  // Cases where there is only one value in the array, return early
  // You can even remove this section leads to Runtime 57 ms Beats 84.36% |  Memory 41.4 MB Beats 96.58%
  if (digits.length === 1) {
    let total = digits[0] + 1;

    // if(${total}.length > 1)
    if (total >= 10) {
      return [1, 0];
    }
    return [total];
  }

  // case where digits len is greater than 1
  for (let i = digits.length - 1; i >= 0; i--) {
    // check if digit at left is greater than 10 or equal to 10
    let sum = digits[i] + 1;

    // Quick exit
    if (sum < 10) {
      digits[i] = sum;
      return digits;
    }

    // Longer calculations temp >= 10
    digits[i] = 0;

    if (i === 0 && sum >= 10) {
      // return [1, ...digits];
      // NOTE: Changing this to this resulted to
      // INFO: Runtime 53 ms Beats 93.14% |  Memory 42.3 MB Beats 13.18%
      digits.unshift(1);
      return digits;
    }
  }

  return digits;
};

let exp1Values = [1, 2, 3]; // [1,2,4]
let exp2Values = [4, 3, 2, 1]; // expects [4,3,2,2]
let exp3Values = [9]; // expects [1,0]
let exp4Values = [2]; // expects [3]
let exp5Values = [0]; // expects [3]
let exp6Values = [9, 9, 9];
let exp7Values = [1, 2, 9];
let exp8Values = [1, 2, 9, 9];
let exp9Values = [9, 9];
let exp10Values = [1, 7, 5, 9];
let exp11Values = [1, 2, 8, 6, 6, 0, 8, 6, 1, 9]; //expects  [9,8,7,6,5,4,3,2,1,1]

// 1. Loops
// 2. get last value in the array
// 3. check if it is greater than 10
// 4. treat equalities and more that 10 values
// 5. Bubble the values till the last value is the last one
// 6. Loop from right to left
// 7. Cases where there is only one value is the array
// 8. Cases where there are more than one values in the array

console.log(`-------------------SIMPLE CASE V1------------------`);

let test1V1 = plusOneV1(exp3Values);
let test2V1 = plusOneV1(exp4Values);
let test3V1 = plusOneV1(exp5Values);

console.log(test1V1);
console.log(test2V1);
console.log(test3V1);

console.log(10 % 10);

console.log(`\n\n-------------------COMPLEX CASE V1------------------`);
let test4V1 = plusOneV1(exp1Values);
let test5V1 = plusOneV1(exp2Values);
let test6V1 = plusOneV1(exp9Values);
let test7V1 = plusOneV1(exp6Values);
let test8V1 = plusOneV1(exp7Values);
let test9V1 = plusOneV1(exp8Values);
let test10V1 = plusOneV1(exp10Values);
let test11V1 = plusOneV1(exp11Values);

console.log("exp1Values: ", test4V1);
console.log("exp2Values: ", test5V1);
console.log("exp9Values: ", test6V1);
console.log("exp6Values: ", test7V1);
console.log("exp7Values: ", test8V1);
console.log("exp8Values: ", test9V1);
console.log("exp10Values: ", test10V1);
console.log("exp11Values: ", test11V1);

/// Optimized function
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOneV2 = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // check if digit at left is greater than 10 or equal to 10
    let sum = digits[i] + 1;

    // Quick exit
    if (sum < 10) {
      digits[i] = sum;
      return digits;
    }

    // Longer calculations temp >= 10
    digits[i] = 0;

    if (i === 0 && sum >= 10) {
      digits.unshift(1);
      return digits;
    }
  }

  return digits;
};

console.log(`\n\n\n-------------------SIMPLE CASE V2------------------`);

let test1V2 = plusOneV2(exp3Values);
let test2V2 = plusOneV2(exp4Values);
let test3V2 = plusOneV2(exp5Values);

console.log(test1V2);
console.log(test2V2);
console.log(test3V2);

console.log(10 % 10);

console.log(`\n\n-------------------COMPLEX CASE V2------------------`);
let test4V2 = plusOneV2(exp1Values);
let test5V2 = plusOneV2(exp2Values);
let test6V2 = plusOneV2(exp9Values);
let test7V2 = plusOneV2(exp6Values);
let test8V2 = plusOneV2(exp7Values);
let test9V2 = plusOneV2(exp8Values);
let test10V2 = plusOneV2(exp10Values);
let test11V2 = plusOneV2(exp11Values);

console.log("exp1Values: ", test4V2);
console.log("exp2Values: ", test5V2);
console.log("exp9Values: ", test6V2);
console.log("exp6Values: ", test7V2);
console.log("exp7Values: ", test8V2);
console.log("exp8Values: ", test9V2);
console.log("exp10Values: ", test10V2);
console.log("exp11Values: ", test11V2);
