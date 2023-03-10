/**
 * The code above first declares an array names that contains ten string values.
 * It's followed by the declaration and definition of a reverse function
 * that utilizes the Durstenfeld shuffle algorithm to randomize
 * the sequence of elements in an array.
 *
 * The reverse function iterates over an array from its last
 * element to its first using a for loop. Within each iteration,
 * it generates a random index number between 0 and the current
 * index (inclusive) and then swaps the elements at these indices.
 * At the end of the loop, the previously ordered array is now randomized.
 *
 *
 */

const names = [
  "Samantha",
  "Rachel",
  "Max",
  "Ethan",
  "Avery",
  "Oscar",
  "Kaia",
  "Ella",
  "Olivia",
  "Charlie",
];

// Randomize the array using Durstenfeld shuffle algorithm
function reverse(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

console.log(names);
// console.log(names.sort());
reverse(names);
console.log(names);
