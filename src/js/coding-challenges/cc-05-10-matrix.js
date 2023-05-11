const matrixV1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrixV2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrixV3 = [
  [1, 2],
  [3, 4],
];

const matrixV4 = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11],
  [13, 14, 15],
];

const spiralMatrixV1 = (matrix) => {
  const output = [];
  // Position trackers
  let top = 0,
    left = 0;
  // dimensions of the matrix trackers
  let right = matrix[0].length - 1, // tracks width of the matrix (how far from left)
    bottom = matrix.length - 1; // tracks the height of the matrix (how far from top)

  // track the direction of the transverse walk -> i.e. right, down, left or up
  let direction = "right";

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i]);
      }
      top++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        output.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        output.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "up";
    } else if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        output.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }

  return output;
};

const resMatrixV1SMV1 = spiralMatrixV1(matrixV1);
const resMatrixV2SMV1 = spiralMatrixV1(matrixV2);
const resMatrixV3SMV1 = spiralMatrixV1(matrixV3);
const resMatrixV4SMV1 = spiralMatrixV1(matrixV4);

// console.table({ resMatrixV1SMV1 });
console.table({
  resMatrixV1SMV1,
  resMatrixV2SMV1,
  resMatrixV3SMV1,
  resMatrixV4SMV1,
});
// console.table({ resMatrixV3SMV1 });
// console.table({ resMatrixV4SMV1 });
