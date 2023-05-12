/*
Given two strings, write a function to determine if the second string is an anagram of the first. 

An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

Examples:

validAnagram(' ', '') // true
validAnagram('aaz', 'zza' ) // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false ) // false
validAnagram('awesorne', 'awesorn') // false
validAnagram('qwerty', 'qeywrt' ) / / true
validAnagram( 'texttwisttime', 'tirnetwisttext') // true

// want to compare two strings contains same number of chars
// inputs are only strings - empty string is also allowed
// must be a-z
// returns true or false 
*/

const data1Input1 = " ",
  data1Input2 = "";

const data2Input1 = "aaz",
  data2Input2 = "zza";

const data3Input1 = "anagram",
  data3Input2 = "nagaram";

const data4Input1 = "rat",
  data4Input2 = "car";

const data5Input1 = "awesorne",
  data5Input2 = "awesorn";

const data6Input1 = "qwerty",
  data6Input2 = "qeywrt";

const data7Input1 = "texttwisttime",
  data7Input2 = "tirnetwisttext";

/**
 * Helper to add frequency of the seen strings to a bucket
 * @param {Map<string, number>} bucket
 * @param {string} str
 */
const addToFrequencyBucket = (bucket, str) => {
  for (let char of str) {
    const hasChar = bucket.has(char);
    const foundChar = hasChar && bucket.get(char);

    bucket.set(char, (foundChar || 0) + 1);
  }
};

/**
 * Compares two strings to see if they are valid anagrams
 * @param {string} str1
 * @param {string} str2
 * @returns boolean
 */
function validAnagram(str1, str2) {
  try {
    // check for errors
    // - no empty parameters
    if (arguments.length !== 2)
      throw new Error(
        `Expects validAnagram to be called with 2 parameters, received ${arguments.length}`
      );

    // - accept only strings
    if (typeof str1 !== "string" || typeof str2 !== "string")
      throw new Error(
        `Expects inputs 1 and 2 to be strings, saw input1 type as ${typeof str1} and input 2 type as ${typeof str2} `
      );

    /// Special cases
    if (str1 === " " && str2 === "") return true;

    /// return early if string lengths differ
    if (str1.length !== str2.length) return false;

    // initialize buckets
    const frBucket1 = new Map();
    const frBucket2 = new Map();

    // add to container/bucket
    addToFrequencyBucket(frBucket1, str1);
    addToFrequencyBucket(frBucket2, str2);

    // compare chars
    let matches = true;
    frBucket1.forEach((value, key) => {
      /// exit on mismatch of keys
      if (!frBucket2.has(key)) {
        matches = false;
        return;
      }

      // exit of mismatch of frequency
      if (value !== frBucket2.get(key)) {
        matches = false;
        return;
      }
    });

    return matches;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Compares two strings to see if they are valid anagrams
 * @param {string} str1
 * @param {string} str2
 * @returns boolean
 */
function validAnagramV2(str1, str2) {
  try {
    // check for errors
    // - no empty parameters
    if (arguments.length !== 2)
      throw new Error(
        `Expects validAnagram to be called with 2 parameters, received ${arguments.length}`
      );

    // - accept only strings
    if (typeof str1 !== "string" || typeof str2 !== "string")
      throw new Error(
        `Expects inputs 1 and 2 to be strings, saw input1 type as ${typeof str1} and input 2 type as ${typeof str2} `
      );

    /// Special cases
    if (str1 === " " && str2 === "") return true;

    /// return early if string lengths differ
    if (str1.length !== str2.length) return false;

    // initialize buckets
    const frBucket = new Map();

    // add to container/bucket
    addToFrequencyBucket(frBucket, str1);

    // compare chars
    let matches = true;
    for (let char of str2) {
      let letter = frBucket.get(char);

      if (!letter) {
        return false;
      } else {
        frBucket.set(char, --letter);
      }
    }

    return matches;
  } catch (error) {
    console.log(error);
  }
}

const response1V1 = validAnagram(data1Input1, data1Input2); // true
const response2V1 = validAnagram(data2Input1, data2Input2); // false
const response3V1 = validAnagram(data3Input1, data3Input2); // true
const response4V1 = validAnagram(data4Input1, data4Input2); // false
const response5V1 = validAnagram(data5Input1, data5Input2); // false
const response6V1 = validAnagram(data6Input1, data6Input2); // true
const response7V1 = validAnagram(data7Input1, data7Input2); // false

console.table({
  response1V1,
  response2V1,
  response3V1,
  response4V1,
  response5V1,
  response6V1,
  response7V1,
});

const response1V2 = validAnagramV2(data1Input1, data1Input2); // true
const response2V2 = validAnagramV2(data2Input1, data2Input2); // false
const response3V2 = validAnagramV2(data3Input1, data3Input2); // true
const response4V2 = validAnagramV2(data4Input1, data4Input2); // false
const response5V2 = validAnagramV2(data5Input1, data5Input2); // false
const response6V2 = validAnagramV2(data6Input1, data6Input2); // true
const response7V2 = validAnagramV2(data7Input1, data7Input2); // false
console.table({
  response1V2,
  response2V2,
  response3V2,
  response4V2,
  response5V2,
  response6V2,
  response7V2,
});
