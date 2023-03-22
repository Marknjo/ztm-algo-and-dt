/*
2. Add Two Numbers

Medium 25K 4.8K

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.

Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]

Example 3:
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]
  

Constraints:

  The number of nodes in each linked list is in the range [1, 100].
  0 <= Node.val <= 9
  It is guaranteed that the list represents a number that does not have leading zeros.
  Accepted
  3.5M

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  // find the largest list in the collection
  // loop through the list by adding each value to corresponding value
  // determine if sum has the carry value - value modula 10%
  // use a collection to add the sums -> no need of extending the current array,

  let largestList = l1.length >= l2.length ? l1 : l2;
  let carry = 0;
  let sums = [];
  /// Helper method for finding carry value (largest value is 9 - sum is below 20)
  function nextListValue(sumResults) {
    carry = sumResults >= 10 ? 1 : 0;

    if (sumResults === 10) {
      return 0;
    }

    if (sumResults > 10) {
      return sumResults % 10;
    }

    // sum is less than 10 -> no carry value
    return sumResults;
  }

  /// add values starting from left
  for (let i = 0; i < largestList.length; i++) {
    let num1 = l1[i] || 0;
    let num2 = l2[i] || 0;
    let sum = nextListValue(num1 + num2 + carry);
    sums.push(sum);
  }

  if (carry > 0) sums.push(carry);

  return sums;
};

let exp1l1 = [2, 4, 3],
  exp1l2 = [5, 6, 4]; // expects  [7,0,8]

let exp2l1 = [0],
  exp2l2 = [0]; // expects  [0]

let exp3l1 = [9, 9, 9, 9, 9, 9, 9],
  exp3l2 = [9, 9, 9, 9]; // expects  [8,9,9,9,0,0,0,1]

let test1V1 = addTwoNumbers(exp1l1, exp1l2);
let test2V1 = addTwoNumbers(exp2l1, exp2l2);
let test3V1 = addTwoNumbers(exp3l1, exp3l2);

console.log({ exp1l1, test1V1 });
console.log({ exp2l1, test2V1 });
console.log({ exp3l1, test3V1 });

console.log(`\n\n-------------------Solution CASE V2------------------`);
