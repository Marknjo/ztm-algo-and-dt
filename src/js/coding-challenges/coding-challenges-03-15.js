/*

  9. Palindrome Number
  Easy 9K 2.4K Companies

  Given an integer x, return true if x is a  palindrome, and false otherwise.

  

  Example 1:

    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.


  Example 2:

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


  Example 3:

    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
  

  Constraints:

  -231 <= x <= 231 - 1


  Follow up: Could you solve it without converting the integer to a string?

 */

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  // Negative values are always not palindrome
  if (x < 0) {
    return false;
  }

  // single values are always palindrome
  if (`${x}`.length === 1) {
    return true;
  }

  let xStr = `${x}`;
  let flippedX = [...xStr].reverse().join("");

  return xStr === flippedX ? true : false;
};

// return early: check if it is a negative number, < 0
// loop from back comparing to front
// break out of look early of the first value does not match.

// alternative 2 -> flip the number by converting first to a string and check equality

let exp1Values = 121; // true
let exp2Values = -121; // false
let exp3Values = 10; // false
let exp4Values = 33852702227987;

let test1V1 = isPalindrome(exp1Values);
let test2V1 = isPalindrome(exp2Values);
let test3V1 = isPalindrome(exp3Values);
let test4V1 = isPalindrome(exp4Values);

console.log(test1V1);
console.log(test2V1);
console.log(test3V1);
console.log(test4V1);

/* V2 - is Palindrome */
console.log(`\n\n-------------------Solution CASE V2------------------`);

const isPalindromeV2 = function (x) {
  // Negative values are always not palindrome
  if (x < 0) {
    return false;
  }

  // single values are always palindrome
  if (`${x}`.length === 1) {
    return true;
  }

  let xStr = `${x}`;
  let lenX = xStr.length;
  let indx = 0;
  for (let i = lenX - 1; i >= 0; i--) {
    if (xStr[i] !== xStr[indx]) {
      return false;
    }
    indx++;
  }

  return true;
};

let test1V2 = isPalindromeV2(exp1Values);
let test2V2 = isPalindromeV2(exp2Values);
let test3V2 = isPalindromeV2(exp3Values);
let test4V2 = isPalindromeV2(exp4Values);

console.log(test1V2);
console.log(test2V2);
console.log(test3V2);
console.log(test4V2);

/* V3 - is Palindrome */
console.log(`\n\n-------------------Solution CASE V3------------------`);

const isPalindromeV3 = function (x) {
  if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

  let reverse = 0;

  while (x > reverse) {
    reverse = reverse * 10 + (x % 10);
    x = ~~(x / 10);
  }

  return x === reverse || x === ~~(reverse / 10);
};

let test1V3 = isPalindromeV3(exp1Values);
let test2V3 = isPalindromeV3(exp2Values);
let test3V3 = isPalindromeV3(exp3Values);
let test4V3 = isPalindromeV3(exp4Values);

console.log(test1V3);
console.log(test2V3);
console.log(test3V3);
console.log(test4V3);

/* V3 - is Palindrome */
console.log(`\n\n-------------------Solution CASE V3------------------`);

const isPalindromeV4 = function (x) {
  // Negative values are always not palindrome
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;

  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);

    x = x / 10;
  }

  console.log(x, reversed);

  return x === reversed || x === reversed / 10;
};

let test1V4 = isPalindromeV4(11);
let test2V4 = isPalindromeV4(exp2Values);
let test3V4 = isPalindromeV4(exp3Values);
let test4V4 = isPalindromeV4(exp4Values);

console.log(test1V4);
console.log(test2V4);
console.log(test3V4);
console.log(test4V4);
