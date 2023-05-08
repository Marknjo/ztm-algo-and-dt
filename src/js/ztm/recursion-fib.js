/// Fibonacci sequence solution

let number = 10;

// 1. Using Recursion
function getFibOfWithRecursion(num) {
  if (num < 2) {
    return num;
  }

  return getFibOfWithRecursion(num - 1) + getFibOfWithRecursion(num - 2);
}

let fibWithRecursion = getFibOfWithRecursion(number);

console.log(
  "Fibonacci sequence of ",
  number,
  " with recursion is: " + fibWithRecursion
);
console.table({ [number]: fibWithRecursion });

// 2. Using Arrays
function getFibOfWithLoops(num) {
  let fibs = [0, 1];

  for (let i = 2; i < num + 1; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }

  return fibs[num];
}

let fibWithLoops = getFibOfWithLoops(number);

console.log(
  "Fibonacci sequence of ",
  number,
  " with Loops is: " + fibWithLoops
);
console.table({ [number]: fibWithLoops });
