/* 
  Write a function which takes in a string and returns counts of each character in the string

  Problem solving
  1. Do I understand the problem
  2. Exploring unique examples
  3. Break it down
  4. Solve/Simplify
  5. Look back and refactor


  /// Steps
  1. Do I understand the problem
    - Strings counter 
    - Expects only string (with numbers)
    - Outputs an object of string counts and 
    - fn - countStrings, inputs -> str, outputs -> bucket

  2. Exploring unique examples
    - What will be unique examples
    i: Simple
      - Hello - {h: 1, e: 1, l: 2, o: 1}
      - 123HelLo! - {1: 1, 2: 1, 3: 1, h: 1, e: 1, l: 2, o: 1}
    ii: Complex Examples
      - Hello World! - {{h: 1, e: 1, l: 3, o: 2, r : 1, d: 1, w: 1}}
    iii: Erratic inputs examples
       - "", [], {}, anything not string or number

  3. Break it down
    - Get the inputs -str
    - check for validity, throw and error -> Invalid Inputs, message, expects only strings and number
    - maintain a bucket of inputs, object or a map
    - loop through a string, for of or for i
    - check characters - only lowercases (must lower all characters)
    - Accepts only string and numbers
    - If a character is in the bucker increment it's seen count else add a new character in the bucket
    - Return the bucket 
  4. Solve/Simplify
  5. Look back and refactor

*/

const validInput1 = "Hello";
const validInput2 = "123HelLo!";
const validInput3 = " Hello World! ";
const inValidInput1 = " ";
const inValidInput2 = ["Hello"];
const inValidInput3 = true;

/**
 *
 * @param {string} char
 */
function isAlphaNumericChar(char) {
  const code = char.charCodeAt(0);

  const isNumeric = code > 47 && code < 58;
  const isLowerChar = code > 90 && code < 123;
  const isUpperChar = code > 64 && code < 91;

  return isNumeric || isLowerChar || isUpperChar;
}

function stringCounter(str) {
  try {
    /// Error handling
    if (!str) throw new Error(`Expects input to have a value, saw undefined`);
    if (typeof str !== "string" || str.trim() === "")
      throw new TypeError(`Expects input type to be string, saw ${typeof str}`);

    // handle logic
    const bucket = {};

    for (let char of str.trim()) {
      // Skip empty chars
      if (char === " ") {
        continue;
      }

      // Skip non strings between a - z and 0-9 (slow option -> !/[a-z,0-9]/.test(char))
      if (!isAlphaNumericChar(char)) {
        continue;
      }

      /// check for [a-z,0-9] - lower case chars
      char = char.toLocaleLowerCase();

      /// Add to bucket and increment chars
      bucket[char] = ++bucket[char] || 1;
    }

    return bucket;
  } catch (error) {
    console.log(error);
  }
}

const res1 = stringCounter(validInput1);
const res2 = stringCounter(validInput2);
const res3 = stringCounter(validInput3);
stringCounter();
stringCounter(inValidInput1);
stringCounter(inValidInput2);
stringCounter(inValidInput3);

console.table(res1);
console.table(res2);
console.table(res3);
