/* 

2011. Final Value of Variable After Performing Operations
Easy | 1.1K | 148  
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.

Example 3:
Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
 

Constraints:

1 <= operations.length <= 100
operations[i] will be either "++X", "X++", "--X", or "X--".

*/

function calcValue(op, value) {
  switch (true) {
    case op === "--X":
    case op === "X--":
      value -= 1;
      break;

    case op === "++X":
    default:
      value += 1;
  }

  return value;
}

/**
 *  Runtime 59 ms & Beats 90.50% | Memory 42 MB & Beats 85.40%
 *
 */
const finalValueAfterOperations = function (operations) {
  let x = 0;

  operations.forEach((op) => {
    x = calcValue(op, x);
  });

  return x;
};

const exp1Operations = ["--X", "X++", "X++"];
const exp2Operations = ["++X", "++X", "X++"];
const exp3Operations = ["X++", "++X", "--X", "X--"];

const sln1 = finalValueAfterOperations(exp1Operations);
const sln2 = finalValueAfterOperations(exp2Operations);
const sln3 = finalValueAfterOperations(exp3Operations);

console.log({ sln1, sln2, sln3 });

/**
 *  Runtime 56 ms & Beats 95.89% | Memory 42.5 MB & Beats 44.75%
 *
 */

const finalValueAfterOperationsV2 = function (operations) {
  let x = 0;
  operations.forEach((op) => (op === "--X" || op === "X--" ? x-- : x++));
  return x;
};

const sln1V2 = finalValueAfterOperationsV2(exp1Operations);
const sln2V2 = finalValueAfterOperationsV2(exp2Operations);
const sln3V2 = finalValueAfterOperationsV2(exp3Operations);

console.log({ sln1V2, sln2V2, sln3V2 });
