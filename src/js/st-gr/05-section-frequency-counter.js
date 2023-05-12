/*
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same. 
*/

/// Sample data

/// success case
const sample1D1 = [1, 1, 2, 4],
  sample1D2 = [1, 1, 4, 16];

const sample4D1 = [3, 6],
  sample4D2 = [9, 36];

// failure case
const sample2D1 = [1, 2, 2, 4],
  sample2D2 = [1, 1, 25, 16];

// error case
const sample3D1 = [1, 2, 2, 4],
  sample3D2 = [1, 1, 4, 16, 25];

const saveToFrequency = (collector, arr) => {
  let hasValue;
  let foundValue;
  for (let value of arr) {
    hasValue = collector.has(value);
    foundValue = hasValue && collector.get(value);
    // collector.set(value, foundValue ? ++foundValue : 1);
    collector.set(value, (foundValue || 0) + 1);
  }
};

/// returns true or false
function same(arr1, arr2) {
  // check if arr1 === arr2 - early return and invalid length
  // store frequencies for arr1 and arr2 - arr1 value & arr2 the squares
  // Loop array 1 storing observed occurrences
  // Loop array 2 storing observed occurrences
  // compare observed occurrences between array 1 & array 2 - arr1 sqr === arr2 value

  try {
    if (
      arguments.length === 0 ||
      !Array.isArray(arr1) ||
      !Array.isArray(arr2)
    ) {
      throw TypeError(
        "Invalid input type, expects arr1 and arr1 to be strings!"
      );
    }

    if (arr1.length !== arr2.length) {
      throw new Error(
        `Input arr1 should be equal to input arr2, saw arr1 length: ${arr1.length} and arr2 length: ${arr2.length} `
      );
    }

    const frequenciesArr1 = new Map();
    const frequenciesArr2 = new Map();

    // Loop arr 1 & 2 and store their frequencies
    saveToFrequency(frequenciesArr1, arr1);
    saveToFrequency(frequenciesArr2, arr2);

    let frequencyMatches = true;

    // compare frequencies
    frequenciesArr1.forEach((frequency, key) => {
      const keySqr = key ** 2;

      // check if arr2 has a square key
      if (!frequenciesArr2.has(keySqr)) {
        frequencyMatches = false;
        return;
      }
      // check if frequency matches
      if (frequenciesArr2.get(keySqr) !== frequency) {
        frequencyMatches = false;
        return;
      }
    });

    /// arr1 sqr === arr2 values
    return frequencyMatches;
  } catch (error) {
    console.log(error);
  }
}

const response1 = same(sample1D1, sample1D2);
const response2 = same(sample2D1, sample2D2);
const response3 = same(sample4D1, sample4D2);
// same(sample3D1, sample3D2);
console.table({ response1, response2, response3 });
