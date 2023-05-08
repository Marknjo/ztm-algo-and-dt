/* 

415. Add Strings
Easy | 4.3K | 637

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.

Accepted 555.1K 
Submissions 1.1M
Acceptance Rate 52.5%


*/

/// Does not work on big ints
const addStrings = function (num1, num2) {
  return `${num1 * 1 + num2 * 1}`;
};

let num1_exp1 = "11",
  num2_exp1 = "123";
let num1_exp2 = "456",
  num2_exp2 = "77";
let num1_exp3 = "0",
  num2_exp3 = "0";

let num1_exp4 = "9333852702227987",
  num2_exp4 = "85731737104263";

let num1_exp5 = "893427328497983427893248932498034289324",
  num2_exp5 = "234859234879342897893427893274";

const sln1 = addStrings(num1_exp1, num2_exp1); // expects "134"
const sln2 = addStrings(num1_exp2, num2_exp2); // expects "533"
const sln3 = addStrings(num1_exp3, num2_exp3); // expects "0"

/**
 *  Runtime 72 ms & Beats 58.22% | Memory 42.2 MB & Beats 88.8%
 *
 */
const addStringsBigValues = (num1, num2) => {
  if (num1.length < 9 && num1.length < 9) {
    return `${num1 * 1 + num2 * 1}`;
  }

  /// Handle large numbers
  if (num1.length >= num2.length) {
    return findSum(num1, num2);
  } else {
    return findSum(num2, num1);
  }

  function findSum(num1, num2) {
    let sum = "";
    let carry = 0;
    let diff = num2.length - num1.length;

    for (let i = num1.length - 1; i >= 0; i--) {
      let temp =
        (Number(num1.charAt(i)) % 10) +
        (Number(num2.charAt(i + diff)) % 10) +
        carry;
      if (temp >= 10) {
        sum = (temp % 10) + sum;
        carry = Math.floor(temp / 10);
      } else {
        sum = temp + sum;
        carry = 0;
      }
    }

    if (carry) {
      sum = carry + sum;
    }

    return sum;
  }
};

const sln4 = addStringsBigValues(num1_exp4, num2_exp4); // expects "9419584439332250"
const sln5 = addStringsBigValues(num1_exp5, num2_exp5); // expects

console.log(BigInt(num1_exp5) === num1_exp5);

console.log(num1_exp4.length, num2_exp4.length);

console.log({ sln1, sln2, sln3, sln4, sln5 });

/**
 *  Runtime 69 ms & Beats 69.21% | Memory 42.4 MB & Beats 80.79%
 *
 */
const addStringsV2 = function (num1, num2) {
  return `${BigInt(num1) + BigInt(num2)}`;
};

const sln1V2 = addStringsV2(num1_exp1, num2_exp1); // expects "134"
const sln2V2 = addStringsV2(num1_exp2, num2_exp2); // expects "533"
const sln3V2 = addStringsV2(num1_exp3, num2_exp3); // expects "0"
const sln4V2 = addStringsV2(num1_exp4, num2_exp4); // expects "9419584439332250"
const sln5V2 = addStringsV2(num1_exp5, num2_exp5); // expects

console.log({ sln1V2, sln2V2, sln3V2, sln4V2, sln5V2 });

/**
 *  Runtime 70 ms & Beats 65.74% | Memory 44.5 MB & Beats 33.57%
 *
 */
const addStringsV3 = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1.charAt(i)) : 0;
    const digit2 = j >= 0 ? parseInt(num2.charAt(j)) : 0;
    const sum = digit1 + digit2 + carry;
    carry = sum >= 10 ? 1 : 0;
    result.unshift(sum % 10);
    i--;
    j--;
  }

  return result.join("");
};

const sln1V3 = addStringsV3(num1_exp1, num2_exp1); // expects "134"
const sln2V3 = addStringsV3(num1_exp2, num2_exp2); // expects "533"
const sln3V3 = addStringsV3(num1_exp3, num2_exp3); // expects "0"
const sln4V3 = addStringsV3(num1_exp4, num2_exp4); // expects "9419584439332250"
const sln5V3 = addStringsV3(num1_exp5, num2_exp5); // expects

console.log({ sln1V3, sln2V3, sln3V3, sln4V3, sln5V3 });
