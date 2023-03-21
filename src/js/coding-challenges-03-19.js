/*
20. Valid Parentheses
Easy  18.6K  1.1K Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
  Input: s = "()"
  Output: true


Example 2:
  Input: s = "()[]{}"
  Output: true


Example 3:
  Input: s = "(]"
  Output: false
 

Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // need a map to store the corresponding parenthesis
  // Need quick lookup solution
  // need to loop through the input s and compare with the corresponding paren
  // return early if there is no match or paren starts with the closing parens

  /// Return early
  if (
    s[0] === ")" ||
    s[0] === "]" ||
    s[0] === "}" ||
    s === "" ||
    s.length % 2 > 0
  ) {
    return false;
  }

  /// Set lookup collection
  const parensLookup = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  // Handle only two values
  if (s.length === 2) return s[1] === parensLookup.get(s[0]) ? true : false;

  /// Loop for more than one values

  // let matchingChar = "";
  let status = true;

  for (let i = 0; i < s.length - 1; i++) {
    if (!status) {
      return false;
    }

    if (i === 0) {
      status = s[i + 1] === parensLookup.get(s[i]);
    }

    if (i % 2 === 0) {
      status = s[i + 1] === parensLookup.get(s[i]);
    }
  }

  return status;
};
// return early: check if it is a negative number, < 0
// loop from back comparing to front
// break out of look early of the first value does not match.

// alternative 2 -> flip the number by converting first to a string and check equality

let exp1Values = "()"; // true
let exp2Values = "()[]{}"; // true
let exp3Values = "(]"; // false
let exp4Values = "()[]{}{"; // true
let exp5Values = "()[]{}{)"; // false
let exp6Values = "()[]{}{}()[]"; // true
let exp7Values = "{[]}"; // true
let exp8Values = "{[()]}"; // true
let exp9Values = "{[([{}])]}()[]"; // true
let exp10Values = "{[([(])][)]}()[]"; // false
let exp11Values = "({)}"; // false
let exp12Values = "[[[]"; // false

let test1V1 = isValid(exp1Values);
let test2V1 = isValid(exp2Values);
let test3V1 = isValid(exp3Values);
let test4V1 = isValid(exp4Values);
let test5V1 = isValid(exp5Values);
let test6V1 = isValid(exp6Values);
let test7V1 = isValid(exp7Values);
let test8V1 = isValid(exp8Values);

console.log(test1V1);
console.log(test2V1);
console.log(test3V1);
console.log(test4V1);
console.log(test5V1);
console.log(test6V1);

console.log(`\n\n-------------------Solution CASE V2------------------`);

const isValidV2 = function (s) {
  // need a map to store the corresponding parenthesis
  // Need quick lookup solution
  // need to loop through the input s and compare with the corresponding paren
  // return early if there is no match or paren starts with the closing parens

  /// Return early
  if (
    s[0] === ")" ||
    s[0] === "]" ||
    s[0] === "}" ||
    s === "" ||
    s.length % 2 > 0
  ) {
    return false;
  }

  /// Set lookup collection
  const parensLookup = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  // Handle only two values
  if (s.length === 2) return s[1] === parensLookup.get(s[0]) ? true : false;

  /// Loop for more than one values
  let openParens = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (i === 0) {
      openParens.push(char);
    }

    /// Where i > 0
    // Check if corresponding paren s[i] to prev seen - true remove it from openParens,
    // false check if it is another open paren, if not is a non-match
    if (parensLookup.get(openParens.at(-1)) === char) {
      openParens.pop(char);
    } else {
      if (parensLookup.has(char)) {
        openParens.push(char);
      } else {
        return false;
      }
    }
  }

  return openParens.length > 1 ? false : true;
};

let test1V2 = isValidV2(exp1Values);
let test2V2 = isValidV2(exp2Values);
let test3V2 = isValidV2(exp3Values);
let test4V2 = isValidV2(exp4Values);
let test5V2 = isValidV2(exp5Values);
let test6V2 = isValidV2(exp6Values);
let test7V2 = isValidV2(exp7Values);
let test8V2 = isValidV2(exp8Values);
let test9V2 = isValidV2(exp9Values);
let test10V2 = isValidV2(exp10Values);
let test11V2 = isValidV2(exp11Values);
let test12V2 = isValidV2(exp12Values);

console.log({ exp1Values, test1V2 });
console.log({ exp2Values, test2V2 });
console.log({ exp3Values, test3V2 });
console.log({ exp4Values, test4V2 });
console.log({ exp5Values, test5V2 });
console.log({ exp6Values, test6V2 });
console.log({ exp7Values, test7V2 });
console.log({ exp8Values, test8V2 });
console.log({ exp9Values, test9V2 });
console.log({ exp10Values, test10V2 });
console.log({ exp11Values, test11V2 });
console.log({ exp12Values, test12V2 });

console.log(
  `\n\n-------------------Solution CASE V3 (ChatGPT)------------------`
);

function validParenthesesV3(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (s[i] === ")" && last !== "(") return false;
      if (s[i] === "}" && last !== "{") return false;
      if (s[i] === "]" && last !== "[") return false;
    }
  }
  return stack.length === 0;
}

let test1V3 = validParenthesesV3(exp1Values);
let test2V3 = validParenthesesV3(exp2Values);
let test3V3 = validParenthesesV3(exp3Values);
let test4V3 = validParenthesesV3(exp4Values);
let test5V3 = validParenthesesV3(exp5Values);
let test6V3 = validParenthesesV3(exp6Values);
let test7V3 = validParenthesesV3(exp7Values);
let test8V3 = validParenthesesV3(exp8Values);
let test9V3 = validParenthesesV3(exp9Values);
let test10V3 = validParenthesesV3(exp10Values);
let test11V3 = validParenthesesV3(exp11Values);
let test12V3 = validParenthesesV3(exp12Values);

console.log({ exp1Values, test1V3 });
console.log({ exp2Values, test2V3 });
console.log({ exp3Values, test3V3 });
console.log({ exp4Values, test4V3 });
console.log({ exp5Values, test5V3 });
console.log({ exp6Values, test6V3 });
console.log({ exp7Values, test7V3 });
console.log({ exp8Values, test8V3 });
console.log({ exp9Values, test9V3 });
console.log({ exp10Values, test10V3 });
console.log({ exp11Values, test11V3 });
console.log({ exp12Values, test12V3 });
