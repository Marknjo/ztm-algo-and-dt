/// What is a factorial of a number -> Two approaches

//1. Using recursion
function factorialOfWithRecursion(num) {
  if (num <= 2) {
    return 2;
  }

  return num * factorialOfWithRecursion(num - 1);
}

let number = 10;
let withRecursion = factorialOfWithRecursion(number);

console.log("Factorial of ", 5, " with recursion is: ");
console.table({ [number]: withRecursion });

/// Using loops

function factorialOfWithLoops(num) {
  let currentNum = 1;

  for (let i = 2; i <= num; i++) {
    currentNum *= i;
  }

  return currentNum;
}

let withLoops = factorialOfWithLoops(number);

console.log("Factorial of ", number, " with loops is: ");
console.table({ [number]: withLoops });
