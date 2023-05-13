/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/

const roman = "III";
const romanI = "LVIII";
const romanII = "MCMXCIV";

const lookup = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

function romanToIntV1(s) {
  const array = s.split("");
  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  for (let i = 0; i < array.length; i++) {
    current = array[i];
    currentValue = lookup.get(current);

    next = array[i + 1];
    nextValue = lookup.get(next);

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
}

// console.log(romanToIntV1(romanII));

function romanToIntV2(s) {
  let total = 0;
  let currentValue;

  for (let i = 0; i < s.length; i++) {
    currentValue = lookup.get(s[i]);

    currentValue < lookup.get(s[i + 1])
      ? (total -= currentValue)
      : (total += currentValue);
  }
  return total;
}

function romanToIntV3(s) {
  let currentValue;
  return [...s].reduce((acc, val, i, str) => {
    currentValue = lookup.get(val);
    currentValue < lookup.get(str[i + 1])
      ? (acc -= currentValue)
      : (acc += currentValue);
    return acc;
  }, 0);
}

console.table({
  v1: romanToIntV1(roman),
  v2: romanToIntV2(roman),
  v3: romanToIntV3(roman),
  v1I: romanToIntV1(romanI),
  v2I: romanToIntV2(romanI),
  v3I: romanToIntV3(romanI),
  v1II: romanToIntV1(romanII),
  v2II: romanToIntV2(romanII),
  v3II: romanToIntV3(romanII),
});
