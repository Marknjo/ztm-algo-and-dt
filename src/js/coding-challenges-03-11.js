/// Print all positive integer solutions to the equation a3 + b3 and d are integers between 1 and 1000.

function positiveIntegers(n) {
  for (let a = 1; a <= 1000; a++) {
    for (let b = 1; b <= 1000; b++) {
      for (let c = 1; c <= 1000; c++) {
        for (let d = 1; d <= 1000; d++) {
          if (
            Math.pow(a, 3) + Math.pow(b, 3) ===
            Math.pow(c, 3) + Math.pow(d, 3)
          ) {
            console.log(Math.pow(a, 3));

            return `${a}, ${b}, ${c}, ${d}`;
          }
        }
      }
    }
  }
}

console.log(positiveIntegers(1000));
